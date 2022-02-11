// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Misc
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import * as actions from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.renderSearchButton = this.renderSearchButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderProfileButton = this.renderProfileButton.bind(this);
  }

  handleClick() {
    const { searchBarVisibility, displaySearchBar, hideSearchBar } = this.props;
    if (!searchBarVisibility) {
      displaySearchBar();
    } else {
      hideSearchBar();
    }
  }

  renderProfileButton() {
    return (
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile avatar"
          className="h-8"
          style={ { filter: `invert(30%) sepia(11%) saturate(870%) hue-rotate(176deg) 
          brightness(92%) contrast(80%)` } }
        />
      </Link>
    );
  }

  renderTitle() {
    const { title } = this.props;
    return (
      <div className="text-center grow">
        <h1
          data-testid="page-title"
          className="text-3xl font-base text-gray-600"
        >
          { title }
        </h1>
      </div>
    );
  }

  renderSearchButton() {
    const { searchButtonVisibility } = this.props;
    if (searchButtonVisibility) {
      return (
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search icon"
            className="h-8"
            style={ { filter: `invert(30%) sepia(11%) saturate(870%) hue-rotate(176deg) 
            brightness(92%) contrast(80%)` } }
          />
        </button>);
    }
  }

  render() {
    return (
      <div
        className="w-full flex flex-row flex-nowrap h-16 bg-gradient-to-b from-red-200
        to-red-100 justify-between items-center fixed top-0 px-5 z-10"
      >
        {this.renderProfileButton()}
        {this.renderTitle()}
        {this.renderSearchButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  displaySearchBar: () => dispatch(actions.displaySearchBar()),
  hideSearchBar: () => dispatch(actions.hideSearchBar()),
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButtonVisibility: PropTypes.bool.isRequired,
  searchBarVisibility: PropTypes.bool.isRequired,
  displaySearchBar: PropTypes.func.isRequired,
  hideSearchBar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
