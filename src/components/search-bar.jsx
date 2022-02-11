// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import _ from 'lodash';
import * as actions from '../actions';
import history from '../history';
import meal from '../services/meal-api';
import cocktail from '../services/cocktail-api';

// Components
import SearchInputRadio from './search-input-radio';
import SearchBarInput from './search-bar-input';
import SearchBarButton from './search-bar-button';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputRadio = this.handleInputRadio.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
    this.handleDrinkResults = this.handleDrinkResults.bind(this);
    this.handleMealsResults = this.handleMealsResults.bind(this);

    this.renderSearchButton = this.renderSearchButton.bind(this);
    this.renderSearchInput = this.renderSearchInput.bind(this);
    this.renderInputRadio = this.renderInputRadio.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState(() => ({ [id]: value }));
  }

  handleInputRadio(event) {
    const { id } = event.target;
    const { checkIngredient, checkName, checkFirstLetter } = this.props;
    if (id === 'ingredient') checkIngredient();
    if (id === 'name') checkName();
    if (id === 'firstLetter') checkFirstLetter();
  }

  handleDrinkResults(obj) {
    const { addDrinks } = this.props;
    if (obj.drinks) {
      addDrinks(obj.drinks);
      if (obj.drinks.length === 1) {
        history.push(`/bebidas/${obj.drinks[0].idDrink}`);
      }
    } else {
      return global
        .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  handleMealsResults(obj) {
    const { addMeals } = this.props;
    if (obj.meals) {
      addMeals(obj.meals);
      if (obj.meals.length === 1) {
        history.push(`/comidas/${obj.meals[0].idMeal}`);
      }
    } else {
      return global
        .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  handleClick() {
    const { searchInput } = this.state;
    const { searchRadioChecked } = this.props;
    if (searchRadioChecked === 'firstLetter' && searchInput.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    this.handleAPI().then((data) => {
      if (_.has(data, 'drinks')) {
        this.handleDrinkResults(data);
      }
      if (_.has(data, 'meals')) {
        this.handleMealsResults(data);
      }
    });
  }

  handleAPI() {
    const { searchInput } = this.state;
    const { searchRadioChecked } = this.props;
    const { pathname } = window.location;
    if (_.includes(pathname, 'comidas')) {
      return meal[searchRadioChecked](searchInput);
    }
    if (_.includes(pathname, 'bebidas')) {
      return cocktail[searchRadioChecked](searchInput);
    }
  }

  renderSearchButton() {
    return (
      <SearchBarButton
        testId="exec-search-btn"
        label="Search"
        handleClick={ this.handleClick }
      />
    );
  }

  renderSearchInput() {
    const { searchInput } = this.state;
    return (
      <SearchBarInput
        id="searchInput"
        testId="search-input"
        searchInput={ searchInput }
        handleChange={ this.handleChange }
      />
    );
  }

  renderInputRadio() {
    return (
      <>
        <SearchInputRadio
          testId="ingredient-search-radio"
          id="ingredient"
          label="Ingrediente"
          handleInputRadio={ this.handleInputRadio }
        />
        <SearchInputRadio
          testId="name-search-radio"
          id="name"
          label="Nome"
          handleInputRadio={ this.handleInputRadio }
        />
        <SearchInputRadio
          testId="first-letter-search-radio"
          id="firstLetter"
          label="Primeira letra"
          handleInputRadio={ this.handleInputRadio }
        />
      </>
    );
  }

  render() {
    return (
      <div
        className="w-full flex flex-col flex-nowrap h-24 bg-gradient-to-b from-red-100
          to-red-50 items-center justify-center fixed top-16"
      >
        <div
          className="w-full flex flex-row flex-nowrap justify-center content-center
            items-center justify-center"
        >
          {this.renderSearchButton()}
          {this.renderSearchInput()}
        </div>
        <div
          className="w-full flex flex-row flex-nowrap justify-center content-center
          items-center justify-between px-1"
        >
          {this.renderInputRadio()}
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchRadioChecked: PropTypes.string.isRequired,
  checkIngredient: PropTypes.func.isRequired,
  checkName: PropTypes.func.isRequired,
  checkFirstLetter: PropTypes.func.isRequired,
  addDrinks: PropTypes.func.isRequired,
  addMeals: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  checkIngredient: () => dispatch(actions.checkIngredient()),
  checkName: () => dispatch(actions.checkName()),
  checkFirstLetter: () => dispatch(actions.checkFirstLetter()),
  addDrinks: (drinks) => dispatch(actions.addDrinks(drinks)),
  addMeals: (meals) => dispatch(actions.addMeals(meals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
