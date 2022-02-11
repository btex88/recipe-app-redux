// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as ACT from '../actions';

// Components
import * as COMP from '../components';

class ExploreFoodArea extends React.Component {
  componentDidMount() {
    const { displaySearchBtn, searchButtonVisibility } = this.props;
    if (!searchButtonVisibility) displaySearchBtn();
  }

  render() {
    return (
      <div className=" h-full w-full flex flex-col items-center">
        <div className="w-full pb-16">
          <COMP.Header
            title="Explorar Origem"
          />
        </div>
        <div className="w-full pb-24">
          <COMP.OriginBar />
        </div>
        <COMP.RecipeCards />
        <div className="w-full pt-16">
          <COMP.Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  displaySearchBtn: () => dispatch(ACT.displaySearchBtn()),
});

ExploreFoodArea.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  displaySearchBtn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFoodArea);
