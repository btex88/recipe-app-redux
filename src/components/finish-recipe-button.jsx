// React dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Misc
import getCurrentDate from '../services/current-date';
import restoreLocalStorage from '../services/restore-localstorage';
import saveLocalStorage from '../services/save-localstorage';

class FinishRecipeButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleRecipeType = this.handleRecipeType.bind(this);
  }

  handleClick() {
    const { type, recipe } = this.props;
    const local = restoreLocalStorage('doneRecipes');
    if (local) {
      const setLocal = this.handleRecipeType(type, recipe, local);
      saveLocalStorage('doneRecipes', setLocal);
    } else {
      const setLocal = this.handleRecipeType(type, recipe);
      saveLocalStorage('doneRecipes', setLocal);
    }
  }

  handleRecipeType(type, recipe, local = '') {
    if (type === 'food') {
      const { idMeal, strArea, strCategory, strMeal, strMealThumb, strTags } = recipe;
      return [...local, {
        id: idMeal,
        type: 'comida',
        area: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
        doneDate: getCurrentDate(),
        tags: strTags ? [...strTags.split(',')] : [],
      }];
    }
    if (type === 'drink') {
      const {
        idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strTags,
      } = recipe;
      return [...local, {
        id: idDrink,
        type: 'bebida',
        area: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
        doneDate: getCurrentDate(),
        tags: strTags ? [...strTags.split(',')] : [],
      }];
    }
  }

  render() {
    const { isDisabled } = this.props;
    return (
      <div className="pb-8">
        <Link to="/receitas-feitas">
          <button
            type="button"
            disabled={ isDisabled }
            data-testid="finish-recipe-btn"
            className={ isDisabled
              ? `border-2 border-red-800 bg-red-200 text-red-900 block text-center py-3
            w-64 text-sm rounded cursor-not-allowed font-bold opacity-50`
              : `border-2 border-red-800 bg-red-200 hover:bg-red-800 hover:text-gray-100
            text-red-900 block text-center py-3 px-16 text-sm rounded cursor-pointer
            font-bold` }
            onClick={ () => this.handleClick() }
          >
            Finalizar Receita
          </button>
        </Link>
      </div>
    );
  }
}

FinishRecipeButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};

export default FinishRecipeButton;
