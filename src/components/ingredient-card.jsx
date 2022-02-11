// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class IngredientCard extends React.Component {
  render() {
    const { index, label, thumbnail } = this.props;
    return (
      <div
        className="flex flex-col flex-nowrap justify-around items-center w-36 h-44
        rounded border mb-4 shadow-xl"
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          className="object-contain rounded"
          data-testid={ `${index}-card-img` }
          src={ thumbnail }
          alt={ label }
        />
        <span
          className="text-base font-semibold leading-6 pb-1 break-all overflow-auto"
          data-testid={ `${index}-card-name` }
        >
          {label}
        </span>
      </div>
    );
  }
}

IngredientCard.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default IngredientCard;
