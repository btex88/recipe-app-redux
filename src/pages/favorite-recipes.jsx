// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as ACT from '../actions';
import restoreLocalStorage from '../services/restore-localstorage';

// Components
import * as COMP from '../components';

class FavoriteRecipes extends React.Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
    this.returnFilteredCards = this.returnFilteredCards.bind(this);
  }

  componentDidMount() {
    const { hideSearchBtn, searchButtonVisibility } = this.props;
    if (searchButtonVisibility) hideSearchBtn();
  }

  returnFilteredCards(cards) {
    return cards.map((value, index) => (
      <COMP.FavoriteRecipesCard
        key={ value.id }
        index={ index }
        { ...value }
      />));
  }

  renderCards() {
    const local = restoreLocalStorage('favoriteRecipes');
    const { filterInputChecked } = this.props;
    if (local) {
      if (filterInputChecked === 'Drinks') {
        const drinks = local.filter((value) => value.type === 'bebida');
        console.log(drinks);
        return this.returnFilteredCards(drinks);
      }
      if (filterInputChecked === 'Food') {
        const food = local.filter((value) => value.type === 'comida');
        return this.returnFilteredCards(food);
      }
      return this.returnFilteredCards(local);
    }
    return null;
  }

  render() {
    const { update } = this.props;
    return (
      <div className=" h-full w-full flex flex-col">
        <COMP.Header
          title="Receitas Favoritas"
        />
        <div className="w-full pb-24">
          <COMP.FilterRecipesBar />
        </div>
        <div
          className="w-full flex flex-col flex-nowrap items-center py-4"
        >
          { this.renderCards() }
        </div>
        {update}
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  hideSearchBtn: () => dispatch(ACT.hideSearchBtn()),
});

FavoriteRecipes.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  hideSearchBtn: PropTypes.func.isRequired,
  update: PropTypes.bool.isRequired,
  filterInputChecked: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);
