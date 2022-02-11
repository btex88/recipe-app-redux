// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Misc
import * as ACT from '../actions';
import meal from '../services/meal-api';
import styles from '../styles/origin-bar.module.css';

class OriginBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  componentDidMount() {
    const { clearAreaSelection, clearMeals } = this.props;
    clearAreaSelection();
    clearMeals();
    this.handleAPI();
  }

  handleAPI() {
    const { addAreas, addMeals } = this.props;
    meal.name().then((data) => addMeals(data.meals));
    meal.areas().then((value) => addAreas(value.meals));
  }

  handleChange(event) {
    const { value } = event.target;
    const { addArea, addMeals } = this.props;
    addArea(value);
    if (value === 'All' || !value) {
      meal.name().then((data) => addMeals(data.meals));
      return 0;
    }
    meal.area(value).then((data) => addMeals(data.meals));
  }

  renderSelect() {
    const { areasList, areaSelection } = this.props;
    if (areasList.length) {
      return (
        <div className="relative">
          <select
            data-testid="explore-by-area-dropdown"
            id=""
            name={ areaSelection }
            className={ styles.container }
            onChange={ (event) => this.handleChange(event) }
          >
            <option value="">Selecione uma localidade</option>
            <option
              key="0-All"
              data-testid="All-option"
              value="All"
            >
              All
            </option>
            { this.renderOption(areasList) }
          </select>
          <span className={ styles.arrow }>{'\u25BC'}</span>
        </div>
      );
    }
    return null;
  }

  renderOption(areas) {
    return areas.map((area, index) => (
      <option
        key={ `${index}-${area.strArea}` }
        data-testid={ `${area.strArea}-option` }
        value={ area.strArea }
      >
        {area.strArea}
      </option>
    ));
  }

  render() {
    return (
      <div
        className="w-full h-24 flex flex-row flex-nowrap bg-gradient-to-b from-red-100
          to-red-50 items-center justify-center fixed top-16 content-center py-1"
      >
        { this.renderSelect() }
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  addArea: (area) => dispatch(ACT.addArea(area)),
  addAreas: (areas) => dispatch(ACT.addAreas(areas)),
  addMeals: (meals) => dispatch(ACT.addMeals(meals)),
  clearAreaSelection: () => dispatch(ACT.clearAreaSelection()),
  clearMeals: () => dispatch(ACT.clearMeals()),
});

OriginBar.propTypes = {
  addArea: PropTypes.func.isRequired,
  addAreas: PropTypes.func.isRequired,
  addMeals: PropTypes.func.isRequired,
  clearAreaSelection: PropTypes.func.isRequired,
  clearMeals: PropTypes.func.isRequired,
  areasList: PropTypes.arrayOf(PropTypes.object).isRequired,
  areaSelection: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OriginBar);
