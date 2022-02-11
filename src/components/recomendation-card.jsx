// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class RecomendationCard extends React.Component {
  render() {
    const { index, label, thumbnail } = this.props;
    return (
      <div className="flex flex-col flex-nowrap justify-around items-center w-40 h-54">
        <img
          data-testid={ `${index}-card-img` }
          src={ thumbnail }
          alt={ label }
        />
        <span
          className="text-sm"
          data-testid={ `${index}-recomendation-title` }
        >
          {label}
        </span>
      </div>
    );
  }
}

RecomendationCard.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default RecomendationCard;
