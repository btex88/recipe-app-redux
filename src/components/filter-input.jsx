// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FilterInput extends React.Component {
  render() {
    const { categoryInputChecked, handleInputChange, categoryName } = this.props;
    return (
      <label
        htmlFor={ categoryName }
        className="w-20 h-12 mx-2 flex flex-col items-center justify-center
          cursor-pointer text-sm text-center shrink"
        data-testid={ `${categoryName}-category-filter` }
      >
        <div className="relative pb-1">
          <input
            id={ categoryName }
            type="checkbox"
            className="sr-only"
            checked={ categoryName === categoryInputChecked }
            onChange={ (event) => handleInputChange(event) }
          />
          <div
            className={ categoryName === categoryInputChecked
              ? 'w-10 h-5 bg-gray-500 rounded-full shadow-inner'
              : 'w-10 h-5 bg-gray-300 rounded-full shadow-inner' }
          />
          <div
            className="absolute w-3 h-3 bg-white rounded-full shadow left-0.5 top-1
            transition"
            style={ categoryName === categoryInputChecked
              ? { transform: 'translateX(200%)', backgroundColor: '#f87171' }
              : { transform: 'translateX(0)' } }
          />
        </div>
        <span
          className={ categoryName === categoryInputChecked
            ? 'font-bold text-red-900 truncate break-all'
            : 'font-medium truncate break-all' }
        >
          { categoryName }
        </span>
      </label>
    );
  }
}

const mapStateToProps = (state) => (state);

FilterInput.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryInputChecked: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FilterInput);
