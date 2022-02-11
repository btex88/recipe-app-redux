// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class LoginButton extends React.Component {
  render() {
    const { label, testId, handleClick, isDisabled } = this.props;
    return (
      <div>
        <button
          data-testid={ testId }
          className={ isDisabled
            ? `bg-red-800 text-white border-2 border-red-800 font-bold py-2 px-6 rounded 
              opacity-50 text-sm cursor-not-allowed mt-3`
            : `border-2 border-red-800 hover:bg-red-800 hover:text-gray-100 mt-3 
              text-red-900 block text-center py-2 px-6 text-sm rounded cursor-pointer 
              font-bold` }
          type="button"
          disabled={ isDisabled }
          onClick={ () => handleClick() }
        >
          {label}
        </button>
      </div>
    );
  }
}

LoginButton.propTypes = {
  testId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LoginButton;
