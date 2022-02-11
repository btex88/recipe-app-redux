// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class InProgressIngredients extends React.Component {
  render() {
    const { isChecked, ingredient, quantity, handleInputChange, index } = this.props;
    return (
      <label
        data-testid={ `${index}-ingredient-step` }
        htmlFor={ index }
        className="w-full h-8 border flex flex-row flex-nowrap justify-start
          items-center px-4"
      >
        <input
          type="checkbox"
          className="w-5 h-5 mr-2"
          style={ { textDecoration: 'none solid rgb(0, 0, 0)' } }
          id={ index }
          checked={ isChecked }
          onChange={ (event) => handleInputChange(event) }
        />
        <span style={ isChecked ? { textDecoration: 'line-through black' } : { } }>
          {`${ingredient} - ${quantity}`}
        </span>
      </label>
    );
  }
}

InProgressIngredients.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  quantity: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default InProgressIngredients;
