// React dependencies
import React from 'react';

// Misc
import history from '../history';
import mealIcon from '../images/mealIcon.svg';

class FooterFoodButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={ () => history.push('/comidas') }
      >
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="meal icon"
          className="h-8"
          style={ { filter: `invert(30%) sepia(11%) saturate(870%) hue-rotate(176deg) 
            brightness(92%) contrast(80%)` } }
        />
      </button>
    );
  }
}

export default FooterFoodButton;
