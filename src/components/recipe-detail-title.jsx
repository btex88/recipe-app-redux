// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetailTitle extends React.Component {
  render() {
    const { title, category } = this.props;
    return (
      <div className="py-2">
        <h1
          data-testid="recipe-title"
          className="font-bold text-2xl capitalize"
        >
          {title}
        </h1>
        <span
          data-testid="recipe-category"
          className="text-xs"
        >
          {category}
        </span>
      </div>
    );
  }
}

RecipeDetailTitle.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default RecipeDetailTitle;
