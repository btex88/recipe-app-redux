// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Misc
import _ from 'lodash';
import * as ACT from '../actions';
import meal from '../services/meal-api';
import restoreLocalStorage from '../services/restore-localstorage';

// Components
import * as COMP from '../components';

class FoodDetails extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
    this.renderRecipeIconButtons = this.renderRecipeIconButtons.bind(this);
    this.checkRecipeStatus = this.checkRecipeStatus.bind(this);
    this.renderRecipeActionButton = this.renderRecipeActionButton.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
    this.checkRecipeStatus();
  }

  componentWillUnmount() {
    const { clearRecipeDetails, clearRecipeStatus } = this.props;
    clearRecipeDetails();
    clearRecipeStatus();
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
    });
  }

  checkRecipeStatus() {
    const {
      match: { params: { id } },
      recipeDone, recipeInProgress } = this.props;
    const doneRecipes = restoreLocalStorage('doneRecipes');
    const inProgressRecipes = restoreLocalStorage('inProgressRecipes');
    const hasLocal = !!inProgressRecipes && Object.keys(inProgressRecipes.meals)
      .some((value) => value === id);
    if (inProgressRecipes && hasLocal) recipeInProgress();
    if (doneRecipes && doneRecipes.some((value) => value.id === id)) recipeDone();
  }

  renderRecipeIconButtons() {
    const { recipeDetails: { idMeal } } = this.props;
    return (
      <div>
        <COMP.FavoriteButton id={ idMeal } />
        <COMP.ShareButton />
      </div>
    );
  }

  renderRecipeActionButton() {
    const { recipeStatus, recipeDetails } = this.props;
    if (recipeStatus === 'done') return null;
    const label = recipeStatus === 'progress' ? 'Continuar Receita' : 'Iniciar Receita';
    const path = window.location.pathname;
    return (
      <Link to={ { pathname: `${path}/in-progress`, state: { recipeDetails } } }>
        <div className="py-4 w-full bg-red-50 flex justify-center fixed bottom-0 left-0">
          <COMP.StartRecipeButton label={ label } />
        </div>
      </Link>);
  }

  render() {
    const {
      recipeDetails: { strYoutube, strMeal, strCategory, strInstructions, ingredients,
        strMealThumb },
      recipeDetails,
    } = this.props;
    return (
      _.has(recipeDetails, 'ingredients') && (

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
            <COMP.RecipeDetailIngredients
              ingredients={ ingredients }
            />
            <COMP.RecipeDetailInstructions
              instructions={ strInstructions }
            />
            <COMP.RecipeDetailVideo
              title={ strMeal }
              url={ strYoutube }
            />
            <COMP.DrinkRecomendation />
          </div>
          { this.renderRecipeActionButton() }
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addRecipeDetails: (recipe) => dispatch(ACT.addRecipeDetails(recipe)),
  clearRecipeDetails: () => dispatch(ACT.clearRecipeDetails()),
  clearRecipeStatus: () => dispatch(ACT.clearRecipeStatus()),
  recipeInProgress: () => dispatch(ACT.recipeInProgress()),
  recipeDone: () => dispatch(ACT.recipeDone()),
});

FoodDetails.propTypes = {
  clearRecipeDetails: PropTypes.func.isRequired,
  addRecipeDetails: PropTypes.func.isRequired,
  recipeDetails: PropTypes.shape({
    ingredients: PropTypes.arrayOf(),
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.number,
    strCategory: PropTypes.string,
    strYoutube: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  recipeDone: PropTypes.func.isRequired,
  recipeInProgress: PropTypes.func.isRequired,
  clearRecipeStatus: PropTypes.func.isRequired,
  recipeStatus: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
