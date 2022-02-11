// React dependencies
import React from 'react';

// Misc
import _ from 'lodash';
import shareIcon from '../images/shareIcon.svg';

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplay: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderPopUpMessage = this.renderPopUpMessage.bind(this);
  }

  handleClick() {
    const clipboard = _.trimEnd(window.location.href, '/in-progress');
    navigator.clipboard.writeText(clipboard);
    this.setState({ shouldDisplay: true }, () => {
      const TWO = 2000;
      setTimeout(() => this.setState({ shouldDisplay: false }), TWO);
    });
  }

  renderPopUpMessage() {
    const { shouldDisplay } = this.state;
    return (
      shouldDisplay && (
        <div
          className="bg-red-100 border border-red-300 text-red-800 absolute -top-8
          right-10 w-28 h-6 rounded-full flex items-center justify-evenly"
        >
          <span className="font-normal text-sm">Link copiado!</span>
        </div>)
    );
  }

  render() {
    return (
      <button
        type="button"
        data-testid="share-btn"
        className="px-2 relative"
        onClick={ () => this.handleClick() }
      >
        { this.renderPopUpMessage() }
        <img
          src={ shareIcon }
          alt="share button"
        />
      </button>
    );
  }
}

export default ShareButton;
