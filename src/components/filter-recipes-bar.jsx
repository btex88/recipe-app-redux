// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as ACT from '../actions';

// Components
import FilterRecipesButton from './filter-recipes-button';

class FilterRecipesBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
  }

  handleInputChange(event) {
    this.toggleInput(event);
  }

  toggleInput(event) {
    const { checkFilter } = this.props;
    const { id, checked } = event.target;
    if (checked) {
      checkFilter(id);
    } else {
      checkFilter('');
    }
  }

  render() {
    return (
      <div
        className="w-full flex flex-row flex-wrap h-24 bg-gradient-to-b from-red-100
          to-red-50 items-center justify-evenly fixed top-16 content-around py-1 z-10"
      >
        <FilterRecipesButton
          inputName="All"
          handleInputChange={ this.handleInputChange }
          testId="filter-by-all-btn"
        />
        <FilterRecipesButton
          inputName="Food"
          handleInputChange={ this.handleInputChange }
          testId="filter-by-food-btn"
        />
        <FilterRecipesButton
          inputName="Drinks"
          handleInputChange={ this.handleInputChange }
          testId="filter-by-drink-btn"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  checkFilter: (filter) => dispatch(ACT.checkFilter(filter)),
});

FilterRecipesBar.propTypes = {
  checkFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRecipesBar);
