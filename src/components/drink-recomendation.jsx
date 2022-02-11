// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Misc
import _ from 'lodash';
import * as ACT from '../actions';
import cocktail from '../services/cocktail-api';

// Components
import RecomendationCard from './recomendation-card';

class DrinkRecomendation extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.renderRecomendedCards = this.renderRecomendedCards.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI() {
    const { addDrinks } = this.props;
    cocktail.name('').then((data) => _.has(data, 'drinks') && addDrinks(data.drinks));
  }

  renderRecomendedCards() {
    const { fetchedDrinks } = this.props;
    const SIX = 6;
    return (
      fetchedDrinks.map((value, index) => (
        index < SIX && (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ value.idDrink }
            className="h-54 w-40 mx-2"

          >
            <RecomendationCard
              id={ value.idDrink }
              index={ index }
              label={ value.strDrink }
              thumbnail={ value.strDrinkThumb }
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
  addDrinks: (drinks) => dispatch(ACT.addDrinks(drinks)),
});

DrinkRecomendation.propTypes = {
  addDrinks: PropTypes.func.isRequired,
  fetchedDrinks: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object],
  )).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkRecomendation);
