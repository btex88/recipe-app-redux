// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import restoreLocalStorage from '../services/restore-localstorage';
import saveLocalStorage from '../services/save-localstorage';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
    this.handleFavoriteFood = this.handleFavoriteFood.bind(this);
  }

  componentDidMount() {
    this.checkFavorite();
  }

  handleClick() {
    const { isFavorite } = this.state;
    const { id } = this.props;
    const { pathname: path } = window.location;
    if (isFavorite) {
      const newLocal = restoreLocalStorage('favoriteRecipes')
        .filter((value) => value.id !== id);
      saveLocalStorage('favoriteRecipes', newLocal);
      this.checkFavorite();
      return 0;
    }
    if (path.includes('comidas')) {
      saveLocalStorage('favoriteRecipes', this.handleFavoriteFood('comida'));
      this.checkFavorite();
      return 0;
    }
    if (path.includes('bebidas')) {
      saveLocalStorage('favoriteRecipes', this.handleFavoriteDrink('bebida'));
      this.checkFavorite();
      return 0;
    }
  }

  handleFavoriteFood(type) {
    const {
      id,
      recipeDetails: {
        strArea: area,
        strCategory: category,
        strMeal: name,
        strMealThumb: image,
      },
    } = this.props;
    const local = restoreLocalStorage('favoriteRecipes');
    if (local) {
      return [...local, { id, type, area, category, alcoholicOrNot: '', name, image }];
    }
    return [{ id, type, area, category, alcoholicOrNot: '', name, image }];
  }

  handleFavoriteDrink(type) {
    const {
      id,
      recipeDetails: {
        strCategory: category,
        strAlcoholic: alcoholicOrNot,
        strDrink: name,
        strDrinkThumb: image,
      },
    } = this.props;
    const local = restoreLocalStorage('favoriteRecipes');
    if (local) {
      return [...local, { id, type, area: '', category, alcoholicOrNot, name, image }];
    }
    return [{ id, type, area: '', category, alcoholicOrNot, name, image }];
  }

  checkFavorite() {
    const { id } = this.props;
    const favorite = restoreLocalStorage('favoriteRecipes');
    if (favorite && favorite.some((value) => value.id === id)) {
      this.setState({ isFavorite: true });
    } else {
      this.setState({ isFavorite: false });
    }
  }

  render() {
    const { isFavorite } = this.state;
    return (
      <button
        type="button"
        className="px-2"
        onClick={ () => this.handleClick() }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favorite button"
        />
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  recipeDetails: PropTypes.shape({
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(FavoriteButton);
