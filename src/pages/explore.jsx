// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as ACT from '../actions';

// Components
import * as COMP from '../components';

class Explore extends React.Component {
  componentDidMount() {
    const { hideSearchBtn, searchButtonVisibility } = this.props;
    if (searchButtonVisibility) hideSearchBtn();
  }

  render() {
    return (
      <div className=" h-full w-full flex flex-col">
        <div className="w-full pb-16">
          <COMP.Header
            title="Explorar"
          />
        </div>
        <div className="w-full pb-4">
          <COMP.GradientBar />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-evenly pb-10">
          <COMP.ExploreButton
            testId="explore-food"
            label="Explorar Comidas"
            path="/explorar/comidas"
          />
          <COMP.ExploreButton
            testId="explore-drinks"
            label="Explorar Bebidas"
            path="/explorar/bebidas"
          />
        </div>
        <div className="w-full pt-16">
          <COMP.Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  hideSearchBtn: () => dispatch(ACT.hideSearchBtn()),
});

Explore.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  hideSearchBtn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
