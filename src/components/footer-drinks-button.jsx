// React dependencies
import React from 'react';

// Misc
import history from '../history';
import drinkIcon from '../images/drinkIcon.svg';

class FooterDrinksButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={ () => history.push('/bebidas') }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drink button"
          className="h-8"
          style={ { filter: `invert(30%) sepia(11%) saturate(870%) hue-rotate(176deg) 
            brightness(92%) contrast(80%)` } }
        />
      </button>
    );
  }
}

export default FooterDrinksButton;
