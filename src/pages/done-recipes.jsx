// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as actions from '../actions';
import restoreLocalStorage from '../services/restore-localstorage';

// Components
import * as COMP from '../components';

class DoneRecipes extends React.PureComponent {
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
      <COMP.DoneRecipesCard
        key={ value.id }
        index={ index }
        { ...value }
      />));
  }

  renderCards() {
    const local = restoreLocalStorage('doneRecipes');
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
    return (
      <div className=" h-full w-full flex flex-col items-center">
        <div className="w-full pb-16">
          <COMP.Header
            title="Receitas Feitas"
          />
        </div>
        <div className="w-full pb-24">
          <COMP.FilterRecipesBar />
        </div>
        <div
          className="w-full flex flex-col flex-nowrap items-center py-4"
        >
          { this.renderCards() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  hideSearchBtn: () => dispatch(actions.hideSearchBtn()),
});

DoneRecipes.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  hideSearchBtn: PropTypes.func.isRequired,
  filterInputChecked: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoneRecipes);
