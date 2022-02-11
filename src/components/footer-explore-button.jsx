// React dependencies
import React from 'react';

// Misc
import history from '../history';
import exploreIcon from '../images/exploreIcon.svg';

class FooterExploreButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={ () => history.push('/explorar') }
      >
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="explore icon"
          className="h-8"
          style={ { filter: `invert(30%) sepia(11%) saturate(870%) hue-rotate(176deg) 
            brightness(92%) contrast(80%)` } }
        />
      </button>
    );
  }
}

export default FooterExploreButton;
