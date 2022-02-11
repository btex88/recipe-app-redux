// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import _ from 'lodash';
import * as ACT from '../actions';
import meal from '../services/meal-api';

// Components
import * as COMP from '../components';

class ExploreFoods extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
  }

  componentDidMount() {
    const { hideSearchBtn, searchButtonVisibility } = this.props;
    if (searchButtonVisibility) hideSearchBtn();
    this.handleAPI();
  }

  handleAPI() {
    const { clearRandomRecipe, addRandomRecipe } = this.props;
    clearRandomRecipe();
    meal.random().then((value) => addRandomRecipe(value.meals[0]));
  }

  render() {
    const { randomRecipe } = this.props;
    return (
      _.isEmpty(randomRecipe) || (
        <div className=" h-full w-full flex flex-col">
          <div className="w-full pb-16">
            <COMP.Header
              title="Explorar Comidas"
            />
          </div>
          <div className="w-full pb-4">
            <COMP.GradientBar />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-evenly pb-10">
            <COMP.ExploreButton
              testId="explore-by-ingredient"
              label="Por Ingredientes"
              path="/explorar/comidas/ingredientes"
            />
            <COMP.ExploreButton
              testId="explore-by-area"
              label="Por Local de Origem"
              path="/explorar/comidas/area"
            />
            <COMP.ExploreButton
              testId="explore-surprise"
              label="Me Surpreenda!"
              path={ `/comidas/${randomRecipe.idMeal}` }
            />
          </div>
          <div className="w-full pt-16">
            <COMP.Footer />
          </div>
        </div>)
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  hideSearchBtn: () => dispatch(ACT.hideSearchBtn()),
  clearRandomRecipe: () => dispatch(ACT.clearRandomRecipe()),
  addRandomRecipe: (recipe) => dispatch(ACT.addRandomRecipe(recipe)),
});

ExploreFoods.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  hideSearchBtn: PropTypes.func.isRequired,
  clearRandomRecipe: PropTypes.func.isRequired,
  addRandomRecipe: PropTypes.func.isRequired,
  randomRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFoods);
