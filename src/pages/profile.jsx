// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Misc
import * as ACT from '../actions';

// Components
import * as COMP from '../components';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderUserEmail = this.renderUserEmail.bind(this);
  }

  componentDidMount() {
    const { hideSearchBtn, searchButtonVisibility } = this.props;
    if (searchButtonVisibility) hideSearchBtn();
  }

  handleClick() {
    localStorage.clear();
  }

  renderUserEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const userEmail = user.email;
      return userEmail;
    }
    return '';
  }

  render() {
    return (
      <div className=" h-full w-full flex flex-col">
        <div className="w-full pb-16">
          <COMP.Header
            title="Perfil"
          />
        </div>
        <div className="w-full pb-4">
          <COMP.GradientBar />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-evenly pb-10">
          <div>
            <span data-testid="profile-email" className="text-3xl">
              { this.renderUserEmail() }
            </span>
          </div>
          <COMP.ProfileButton
            testId="profile-done-btn"
            label="Receitas Feitas"
            path="/receitas-feitas"
            handleClick={ false }
          />
          <COMP.ProfileButton
            testId="profile-favorite-btn"
            label="Receitas Favoritas"
            path="/receitas-favoritas"
            handleClick={ false }
          />
          <COMP.ProfileButton
            testId="profile-logout-btn"
            label="Sair"
            path="/"
            handleClick={ this.handleClick }
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

Profile.propTypes = {
  searchButtonVisibility: PropTypes.bool.isRequired,
  hideSearchBtn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
