// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FilterRecipesButton extends React.Component {
  render() {
    const { inputName, testId, filterInputChecked, handleInputChange } = this.props;
    return (
      <label
        htmlFor={ inputName }
        className="w-20 h-12 mx-2 flex flex-col items-center justify-center
          cursor-pointer text-md text-center"
        data-testid={ testId }
      >
        <div className="relative pb-1">
          <input
            id={ inputName }
            type="checkbox"
            className="sr-only"
            checked={ inputName === filterInputChecked }
            onChange={ (event) => handleInputChange(event) }
          />
          <div
            className={ inputName === filterInputChecked
              ? 'w-14 h-7 bg-gray-500 rounded-full shadow-inner'
              : 'w-14 h-7 bg-gray-300 rounded-full shadow-inner' }
          />
          <div
            className="absolute w-6 h-6 bg-white rounded-full shadow left-0.5 top-0.5
            transition"
            style={ inputName === filterInputChecked
              ? { transform: 'translateX(117%)', backgroundColor: '#f87171' }
              : { transform: 'translateX(0)' } }
          />
        </div>
        <div
          className={ inputName === filterInputChecked
            ? 'font-semibold text-red-900'
            : 'font-light' }
        >
          { inputName }
        </div>
      </label>
    );
  }
}

const mapStateToProps = (state) => (state);

FilterRecipesButton.propTypes = {
  inputName: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  filterInputChecked: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FilterRecipesButton);
