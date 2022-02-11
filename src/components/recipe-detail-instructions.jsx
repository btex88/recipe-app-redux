// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetailInstructions extends React.Component {
  render() {
    const { instructions } = this.props;
    return (
      <div className="w-full">
        <p
          data-testid="instructions"
          className="pt-6 px-4 text-justify font-normal"
        >
          {instructions}
        </p>
      </div>
    );
  }
}

RecipeDetailInstructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default RecipeDetailInstructions;
