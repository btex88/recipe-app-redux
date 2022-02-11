// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Misc
import _ from 'lodash';
import * as actions from '../actions';
import meal from '../services/meal-api';

// Components
import RecomendationCard from './recomendation-card';

class FoodRecomendation extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.renderRecomendedCards = this.renderRecomendedCards.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI() {
    const { addMeals } = this.props;
    meal.name('').then((data) => _.has(data, 'meals') && addMeals(data.meals));
  }

  renderRecomendedCards() {
    const { fetchedMeals } = this.props;
    const SIX = 6;
    return (
      fetchedMeals.map((value, index) => (
        index < SIX && (
          <div
            key={ value.idMeal }
            className="h-54 w-40 mx-2"
            data-testid={ `${index}-recomendation-card` }

          >
            <RecomendationCard
              id={ value.idMeal }
              index={ index }
              label={ value.strMeal }
              thumbnail={ value.strMealThumb }
            />
          </div>
        )
      ))
    );
  }

  render() {
    return (
      <div
        className="h-54 pt-4 w-full flex flex-row flex-nowrap overflow-x-scroll
          items-center"
      >
        {this.renderRecomendedCards()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  addMeals: (Meals) => dispatch(actions.addMeals(Meals)),
});

FoodRecomendation.propTypes = {
  addMeals: PropTypes.func.isRequired,
  fetchedMeals: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object],
  )).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodRecomendation);
