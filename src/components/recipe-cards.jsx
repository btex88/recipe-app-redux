// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Misc
import _ from 'lodash';

// React components
import RecipeCard from './recipe-card';

class RecipeCards extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
    this.renderMealCards = this.renderMealCards.bind(this);
    this.renderDrinkCards = this.renderDrinkCards.bind(this);
  }

  renderMealCards() {
    const { fetchedMeals } = this.props;
    const ELEVEN = 11;
    if (fetchedMeals) {
      return fetchedMeals.map((meal, index) => {
        const { idMeal, strMeal, strMealThumb } = meal;
        if (index <= ELEVEN) {
          return (
            <Link
              to={ {
                pathname: `/comidas/${idMeal}`,
                state: { index },
              } }
              key={ idMeal }
            >
              <RecipeCard
                index={ index }
                label={ strMeal }
                thumbnail={ strMealThumb }
                id={ idMeal }
              />
            </Link>
          );
        }
        return '';
      });
    }
  }

  renderDrinkCards() {
    const { fetchedDrinks } = this.props;
    const ELEVEN = 11;
    if (fetchedDrinks.length) {
      return fetchedDrinks.map((drink, index) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        if (index <= ELEVEN) {
          return (
            <Link
              to={ {
                pathname: `/bebidas/${idDrink}`,
                state: { index },
              } }
              key={ idDrink }
            >
              <RecipeCard
                key={ idDrink }
                index={ index }
                label={ strDrink }
                thumbnail={ strDrinkThumb }
              />
            </Link>

          );
        }
        return '';
      });
    }
  }

  renderCards() {
    const { pathname } = window.location;
    if (_.includes(pathname, 'comidas')) return this.renderMealCards();
    if (_.includes(pathname, 'bebidas')) return this.renderDrinkCards();
  }

  render() {
    return (
      <div className="w-full flex flex-row flex-wrap justify-between px-3 pt-4">
        { this.renderCards() }
      </div>
    );
  }
}

RecipeCards.propTypes = {
  fetchedDrinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchedMeals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(RecipeCards);
