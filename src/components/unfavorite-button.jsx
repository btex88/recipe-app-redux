// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as ACT from '../actions';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import restoreLocalStorage from '../services/restore-localstorage';
import saveLocalStorage from '../services/save-localstorage';

class UnfavoriteButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, update } = this.props;
    const local = restoreLocalStorage('favoriteRecipes');
    const newLocal = local.filter((value) => value.id !== id);
    saveLocalStorage('favoriteRecipes', newLocal);
    update();
  }

  render() {
    const { index } = this.props;
    return (
      <button
        type="button"
        className="px-2"
        onClick={ () => this.handleClick() }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="unfavorite button"
        />
      </button>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch(ACT.update()),
});

UnfavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnfavoriteButton);
