// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  render() {
    const { id, label, testId, type, inputValue, handleChange, placeholder } = this.props;
    return (
      <label htmlFor={ id } className="flex shadow-md mb-5 text-xs">
        <span
          className="bg-red-800 w-32 font-bold text-center text-gray-200 rounded-l py-3
            font-xs"
        >
          {label}
        </span>
        <input
          data-testid={ testId }
          id={ id }
          type={ type }
          value={ inputValue }
          onChange={ (event) => handleChange(event) }
          placeholder={ placeholder }
          className="field font-xs text-gray-600 p-2 px-3 rounded-r w-full text-center"
        />
      </label>
    );
  }
}

LoginInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginInput;
