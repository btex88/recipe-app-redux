// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Misc
import _ from 'lodash';
import meal from '../services/meal-api';
import cocktail from '../services/cocktail-api';
import * as ACT from '../actions';

// React components
import FilterInput from './filter-input';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDrinks = this.handleDrinks.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
    this.handleMeals = this.handleMeals.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    const { addCategories } = this.props;
    const { pathname } = window.location;
    if (_.includes(pathname, 'comidas')) {
      meal.categories().then((data) => addCategories(data.meals));
    }
    if (_.includes(pathname, 'bebidas')) {
      cocktail.categories().then((data) => addCategories(data.drinks));
    }
  }

  handleInputChange(event) {
    this.toggleInput(event);
  }

  handleMeals(id) {
    const { addMeals } = this.props;
    if (id === 'All' || id === '') {
      return meal.name().then((data) => addMeals(data.meals));
    }
    return meal.category(id).then((data) => addMeals(data.meals));
  }

  handleDrinks(id) {
    const { addDrinks } = this.props;
    if (id === 'All' || id === '') {
      return cocktail.name().then((data) => addDrinks(data.drinks));
    }
    return cocktail.category(id).then((data) => addDrinks(data.drinks));
  }

  getLocation(id = '') {
    const { pathname } = window.location;
    if (_.includes(pathname, 'bebidas')) this.handleDrinks(id);
    if (_.includes(pathname, 'comidas')) this.handleMeals(id);
  }

  toggleInput(event) {
    const { checkCategory } = this.props;
    const { id, checked } = event.target;
    if (checked) {
      checkCategory(id);
      this.getLocation(id);
    } else {
      checkCategory('');
      this.getLocation();
    }
  }

  render() {
    const FIVE = 5;
    const { filterCategories } = this.props;
    return (
      <div
        className="w-full flex flex-row flex-wrap h-24 bg-gradient-to-b from-red-100
          to-red-50 items-center justify-evenly fixed top-16 content-around py-1"
      >
        <FilterInput
          categoryName="All"
          handleInputChange={ this.handleInputChange }
        />
        { filterCategories.map((value, index) => (
          index < FIVE && (
            <FilterInput
              key={ `${value.strCategory}-0${index}` }
              categoryName={ value.strCategory }
              handleInputChange={ this.handleInputChange }
            />)
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  addCategories: (categories) => dispatch(ACT.addCategories(categories)),
  checkCategory: (category) => dispatch(ACT.checkCategory(category)),
  addDrinks: (drinks) => dispatch(ACT.addDrinks(drinks)),
  addMeals: (meals) => dispatch(ACT.addMeals(meals)),
});

FilterBar.propTypes = {
  addMeals: PropTypes.func.isRequired,
  addDrinks: PropTypes.func.isRequired,
  addCategories: PropTypes.func.isRequired,
  checkCategory: PropTypes.func.isRequired,
  filterCategories: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
