// React dependencies
import React from 'react';

// Components
import FooterDrinksButton from './footer-drinks-button';
import FooterExploreButton from './footer-explore-button';
import FooterFoodButton from './footer-food-button';

class Footer extends React.Component {
  render() {
    return (
      <div
        data-testid="footer"
        className="w-full flex flex-row flex-nowrap h-16 bg-gradient-to-b from-red-50
      to-red-200 justify-between items-center fixed bottom-0 px-4"
      >
        <FooterDrinksButton />
        <FooterExploreButton />
        <FooterFoodButton />
      </div>
    );
  }
}

export default Footer;
