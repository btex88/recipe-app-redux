// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class StartRecipeButton extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <div className="w-full h-12">
        <button
          data-testid="start-recipe-btn"
          type="button"
          className="border-2 border-red-800 bg-red-200 hover:bg-red-800
          hover:text-gray-100 text-red-900 block text-center py-3 w-64 text-sm rounded
          cursor-pointer font-bold fixed bottom-0 mb-4 left-12"
        >
          { label }
        </button>
      </div>
    );
  }
}

StartRecipeButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default StartRecipeButton;
