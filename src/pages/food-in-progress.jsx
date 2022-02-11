// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Misc
import _ from 'lodash';
import * as ACT from '../actions';
import meal from '../services/meal-api';
import restoreLocalStorage from '../services/restore-localstorage';
import saveLocalStorage from '../services/save-localstorage';

// Components
import * as COMP from '../components';

class FoodInProgress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRenderIngredients: false,
      isDisabled: true,
    };

    this.renderRecipeIconButtons = this.renderRecipeIconButtons.bind(this);
    this.renderIngredients = this.renderIngredients.bind(this);
    this.saveNewLocal = this.saveNewLocal.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
    this.checkButtonStatus = this.checkButtonStatus.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
    this.checkButtonStatus();
  }

  componentWillUnmount() {
    const { clearRecipeDetails } = this.props;
    this.setState({ shouldRenderIngredients: false });
    clearRecipeDetails();
  }

  // Function to creates an array with objects of the ingredient and its individual quantity
  handleIngredients(arr) {
    return Object.keys(arr)
      .filter((key) => key.includes('strIngredient'))
      .reduce((acc, curr) => {
        if (arr[curr]) {
          acc.push({
            ingredient: arr[curr],
            quantity: arr[curr.replace(/strIngredient/gi, 'strMeasure')],
          });
        }
        return acc;
      }, []);
  }

  handleAPI() {
    const {
      addRecipeDetails,
      match: {
        params: { id },
      },
    } = this.props;
    meal.details(id).then((value) => {
      value.meals[0].ingredients = this.handleIngredients(value.meals[0]);
      addRecipeDetails(value.meals[0]);
      this.handleLocalStorage();
    });
  }

  handleInputChange(event) {
    const {
      match: { params: { id: recipeId } },
    } = this.props;
    const inProgressRecipes = restoreLocalStorage('inProgressRecipes');
    const { id } = event.target;
    const { isChecked } = inProgressRecipes.meals[recipeId][id];
    inProgressRecipes.meals[recipeId][id].isChecked = !isChecked;
    saveLocalStorage('inProgressRecipes', inProgressRecipes);
    this.forceUpdate();
    this.checkButtonStatus();
  }

  handleLocalStorage() {
    const {
      match: { params: { id } },
      recipeDetails: { ingredients },
    } = this.props;
    if (restoreLocalStorage('inProgressRecipes')) {
      if (_.has(restoreLocalStorage('inProgressRecipes').meals, id)) {
        this.setState({ shouldRenderIngredients: true });
        return 0;
      }
      const inProgressRecipes = restoreLocalStorage('inProgressRecipes');
      ingredients.forEach((value) => {
        value.isChecked = false;
      });
      inProgressRecipes.meals[id] = ingredients;
      saveLocalStorage('inProgressRecipes', inProgressRecipes);
      this.setState({ shouldRenderIngredients: true });
      return 0;
    }
    this.saveNewLocal();
    return 0;
  }

  checkButtonStatus() {
    const { match: { params: { id } } } = this.props;
    const local = restoreLocalStorage('inProgressRecipes');
    if (local && local.meals[id]) {
      const shouldEnable = local.meals[id].every((value) => value.isChecked);
      if (shouldEnable) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    }
  }

  saveNewLocal() {
    const { match: { params: { id } } } = this.props;
    const { recipeDetails: { ingredients } } = this.props;
    ingredients.forEach((value) => {
      value.isChecked = false;
    });
    const inProgressRecipes = {
      meals: { [id]: ingredients },
      cocktails: {},
    };
    saveLocalStorage('inProgressRecipes', inProgressRecipes);
    this.setState({ shouldRenderIngredients: true });
  }

  renderRecipeIconButtons() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <COMP.FavoriteButton id={ id } />
        <COMP.ShareButton />
      </div>
    );
  }

  renderIngredients() {
    const { match: { params: { id } } } = this.props;
    const inProgressRecipes = restoreLocalStorage('inProgressRecipes');
    return (
      inProgressRecipes.meals[id].map((value, index) => (
        <COMP.InProgressIngredients
          key={ `${index}-${id}` }
          index={ index }
          quantity={ value.quantity }
          ingredient={ value.ingredient }
          isChecked={ inProgressRecipes.meals[id][index].isChecked }
          handleInputChange={ this.handleInputChange }
        />
      ))
    );
  }

  render() {
    const { shouldRenderIngredients, isDisabled } = this.state;
    const {
      recipeDetails: {
        strMeal,
        strCategory,
        strInstructions,
        strMealThumb,
      },
      recipeDetails,
    } = this.props;
    console.log(this.props);
    return _.has(recipeDetails, 'ingredients') && (
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full pb-20">
          <COMP.RecipeDetailImage
            url={ strMealThumb }
            title={ strMeal }
          />
          <div
            className="flex flex-row flex-nowrap items-center content-center w-full pb-4
            justify-between px-4"
          >
            <COMP.RecipeDetailTitle
              title={ strMeal }
              category={ strCategory }
            />
            { this.renderRecipeIconButtons() }
          </div>
          { shouldRenderIngredients && this.renderIngredients() }
          <COMP.RecipeDetailInstructions
            instructions={ strInstructions }
          />
        </div>
        <COMP.FinishRecipeButton
          isDisabled={ isDisabled }
          type="food"
          recipe={ recipeDetails }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addRecipeDetails: (recipe) => dispatch(ACT.addRecipeDetails(recipe)),
  clearRecipeDetails: () => dispatch(ACT.clearRecipeDetails()),

});

FoodInProgress.propTypes = {
  addRecipeDetails: PropTypes.func.isRequired,
  clearRecipeDetails: PropTypes.func.isRequired,
  recipeDetails: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.object),
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string }) }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodInProgress);
