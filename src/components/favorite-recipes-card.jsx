// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import FavoriteShareButton from './favorite-share-button';
import UnfavoriteButton from './unfavorite-button';

class FavoriteRecipesCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderRecipeImage = this.renderRecipeImage.bind(this);
    this.renderRecipeCategory = this.renderRecipeCategory.bind(this);
    this.renderActionButtons = this.renderActionButtons.bind(this);
    this.renderRecipeTitle = this.renderRecipeTitle.bind(this);
    this.validateCategory = this.validateCategory.bind(this);
  }

  validateCategory(type, category, alcoholicOrNot, area) {
    if (type === 'bebida') return alcoholicOrNot;
    if (type === 'comida') return `${area} - ${category}`;
    return null;
  }

  renderRecipeImage() {
    const { index, image, name, type, id } = this.props;
    return (
      <Link to={ `/${type}s/${id}` }>
        <div
          className="flex flex-row items-center pl-3 py-3"
        >
          <img
            className="h-32 object-contain rounded"
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
          />
        </div>
      </Link>
    );
  }

  renderRecipeCategory() {
    const { index, type, category, alcoholicOrNot, area } = this.props;
    return (
      <div>
        <span
          className="text-xs"
          data-testid={ `${index}-horizontal-top-text` }
        >
          { this.validateCategory(type, category, alcoholicOrNot, area) }
        </span>
      </div>
    );
  }

  renderRecipeTitle() {
    const { index, name, type, id } = this.props;
    return (
      <Link to={ `/${type}s/${id}` }>
        <div className="h-full flex items-center">
          <span
            className="text-base"
            data-testid={ `${index}-horizontal-name` }
          >
            { name}
          </span>
        </div>
      </Link>
    );
  }

  renderActionButtons() {
    const { index, type, id } = this.props;
    return (
      <>
        <FavoriteShareButton
          index={ index }
          id={ id }
          type={ type }
        />
        <UnfavoriteButton
          index={ index }
          id={ id }
        />
      </>
    );
  }

  render() {
    return (
      <div
        className="h-40 w-80 border border rounded flex flex-row flex-nowrap
        shadow-lg mb-4 pr-2"
      >
        <div
          className="w-1/2 h-full"
        >
          { this.renderRecipeImage() }
        </div>
        <div
          className="w-1/2 h-full py-2"
        >
          <div
            className="w-full h-1/4"
          >
            { this.renderRecipeCategory() }

          </div>
          <div
            className="w-full h-1/4"
          >
            { this.renderRecipeTitle() }
          </div>
          <div
            className="w-full h-1/2 flex flex-row flex-nowrap items-center justify-evenly"
          >
            { this.renderActionButtons() }

          </div>
        </div>
      </div>
    );
  }
}

FavoriteRecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FavoriteRecipesCard;
