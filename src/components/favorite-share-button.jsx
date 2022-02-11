// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Misc
import shareIcon from '../images/shareIcon.svg';

class FavoriteShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplay: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderPopUpMessage = this.renderPopUpMessage.bind(this);
  }

  handleClick() {
    const { type, id } = this.props;
    const clipboard = window.location.href
      .replace('/receitas-favoritas', `/${type}s/${id}`);
    navigator.clipboard.writeText(clipboard);
    this.setState({ shouldDisplay: true }, () => {
      const ONE = 1000;
      setTimeout(() => this.setState({ shouldDisplay: false }), ONE);
    });
  }

  renderPopUpMessage() {
    const { shouldDisplay } = this.state;
    return (
      shouldDisplay && (
        <div
          className="bg-red-200 absolute -top-8 right-0 w-28 h-7 rounded flex items-center
          justify-evenly opacity-50"
        >
          <span
            className="font-normal text-xs text-black opacity-100 font-bold"
          >
            Link copiado!
          </span>
        </div>)
    );
  }

  render() {
    const { index } = this.props;
    return (
      <button
        className="relative"
        type="button"
        onClick={ () => this.handleClick() }
      >
        { this.renderPopUpMessage() }
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          className="h-6 pr-2 object-contain"
          src={ shareIcon }
          alt="share icon"
        />
      </button>
    );
  }
}

FavoriteShareButton.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteShareButton;
