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

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    const { displaySearchBtn, searchButtonVisibility, shouldRunAPI } = this.props;
    if (!searchButtonVisibility) displaySearchBtn();
    if (shouldRunAPI) this.handleAPI();
  }

  componentWillUnmount() {
    const { searchBarVisibility, hideSearchBar, runAPI } = this.props;
    if (searchBarVisibility) hideSearchBar();
    runAPI();
  }

  handleAPI() {
    const { addMeals } = this.props;
    meal.name('').then((data) => _.has(data, 'meals') && addMeals(data.meals));
  }

  render() {
    const { searchBarVisibility, fetchedMeals } = this.props;
    return (
      <div className=" h-full w-full flex flex-col items-center">
        <div className="w-full pb-16">
          <COMP.Header
            title="Comidas"
          />
        </div>

        { searchBarVisibility
          ? (
            <div className="w-full pb-24">
              <COMP.SearchBar />
            </div>)
          : (
            <div className="w-full pb-24">
              <COMP.FilterBar />
            </div>)}

        {fetchedMeals.length ? <COMP.RecipeCards /> : null}
        <div className="w-full pt-16">
          <COMP.Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  displaySearchBtn: () => dispatch(ACT.displaySearchBtn()),
  hideSearchBar: () => dispatch(ACT.hideSearchBar()),
  addMeals: (meals) => dispatch(ACT.addMeals(meals)),
  runAPI: () => dispatch(ACT.runAPI()),
});

Foods.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  searchBarVisibility: PropTypes.bool.isRequired,
  displaySearchBtn: PropTypes.func.isRequired,
  hideSearchBar: PropTypes.func.isRequired,
  addMeals: PropTypes.func.isRequired,
  fetchedMeals: PropTypes.arrayOf(PropTypes.object).isRequired,
  shouldRunAPI: PropTypes.bool.isRequired,
  runAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
