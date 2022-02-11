// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetailImage extends React.Component {
  render() {
    const { url, title } = this.props;
    return (
      <img
        data-testid="recipe-photo"
        alt={ title }
        src={ url }
        className="object-contain p-4 rounded"
      />
    );
  }
}

RecipeDetailImage.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default RecipeDetailImage;
