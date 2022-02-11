// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Misc
import * as ACT from '../actions';
import cocktail from '../services/cocktail-api';

// Components
import * as COMP from '../components';

class ExploreDrinkIngredients extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.renderIngredientList = this.renderIngredientList.bind(this);
  }

  componentDidMount() {
    const { hideSearchBtn, searchButtonVisibility } = this.props;
    if (searchButtonVisibility) hideSearchBtn();
    this.handleAPI();
  }

  handleAPI() {
    const { addIngredients, clearIngredients } = this.props;
    clearIngredients();
    cocktail.ingredientList().then((value) => addIngredients(value.drinks));
  }

  renderIngredientList() {
    const ELEVEN = 11;
    const { listIngredients, addDrinks, dontRunAPI, clearDrinks } = this.props;
    if (listIngredients.length) {
      return (listIngredients.map((value, index) => {
        if (index <= ELEVEN) {
          return (
            <Link
              to="/bebidas"
              onClick={ () => {
                dontRunAPI();
                clearDrinks();
                cocktail.ingredient(value.strIngredient1)
                  .then((data) => addDrinks(data.drinks));
              } }
            >
              <COMP.IngredientCard
                index={ index }
                label={ value.strIngredient1 }
                thumbnail={ `https://www.thecocktaildb.com/images/ingredients/${
                  value.strIngredient1}-Small.png` }
              />
            </Link>
          );
        }
        return '';
      }));
    }
  }

  render() {
    return (
      <div className=" h-full w-full flex flex-col">
        <div className="w-full pb-16">
          <COMP.Header
            title="Explorar Ingredientes"
          />
        </div>

        <div className="w-full pb-4">
          <COMP.GradientBar />
        </div>
        <div className="w-full w-full flex flex-row flex-wrap justify-between px-3 pt-4">
          { this.renderIngredientList() }
        </div>

        <div className="w-full pt-16">
          <COMP.Footer />
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  hideSearchBtn: () => dispatch(ACT.hideSearchBtn()),
  addIngredients: (ingredientList) => dispatch(ACT.addIngredients(ingredientList)),
  addDrinks: (drinks) => dispatch(ACT.addDrinks(drinks)),
  clearDrinks: () => dispatch(ACT.clearDrinks()),
  clearIngredients: () => dispatch(ACT.clearIngredients()),
  dontRunAPI: () => dispatch(ACT.dontRunAPI()),
});

ExploreDrinkIngredients.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  hideSearchBtn: PropTypes.func.isRequired,
  listIngredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  addIngredients: PropTypes.func.isRequired,
  clearIngredients: PropTypes.func.isRequired,
  addDrinks: PropTypes.func.isRequired,
  dontRunAPI: PropTypes.func.isRequired,
  clearDrinks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreDrinkIngredients);
