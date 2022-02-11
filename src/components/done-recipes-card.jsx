// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import DoneRecipesShareButton from './done-recipes-share-button';

class DoneRecipesCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderRecipeImage = this.renderRecipeImage.bind(this);
    this.renderRecipeCategory = this.renderRecipeCategory.bind(this);
    this.renderShareButton = this.renderShareButton.bind(this);
    this.renderRecipeTitle = this.renderRecipeTitle.bind(this);
    this.renderRecipeConclusionDate = this.renderRecipeConclusionDate.bind(this);
    this.renderRecipeTags = this.renderRecipeTags.bind(this);
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

  renderShareButton() {
    const { index, type, id } = this.props;
    return (
      <DoneRecipesShareButton
        index={ index }
        id={ id }
        type={ type }
      />
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

  renderRecipeConclusionDate() {
    const { doneDate, index } = this.props;
    return (
      <div className="h-full flex items-center">
        <span
          className="text-sm"
          data-testid={ `${index}-horizontal-done-date` }
        >
          {`Feita em: ${doneDate}`}
        </span>
      </div>);
  }

  renderRecipeTags() {
    const { tags, index } = this.props;
    if (tags.length) {
      return tags.map((tagName, ind) => (
        <div
          key={ ind }
          className="px-2 bg-red-100 rounded-full"
        >
          <span
            className="text-xs"
            data-testid={ `${index}-${tagName}-horizontal-tag` }
          >
            {tagName}
          </span>
        </div>
      ));
    }
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
            className="w-full h-1/4 flex flex-row flex-nowrap justify-between
            items-center"
          >
            { this.renderRecipeCategory() }
            { this.renderShareButton() }

          </div>
          <div
            className="w-full h-1/4"
          >
            { this.renderRecipeTitle() }
          </div>
          <div
            className="w-full h-1/4"
          >
            { this.renderRecipeConclusionDate() }
          </div>
          <div
            className="w-full h-1/4 flex flex-row flex-nowrap justify-evenly
            items-center"
          >
            { this.renderRecipeTags() }
          </div>
        </div>
      </div>
    );
  }
}

DoneRecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DoneRecipesCard;
