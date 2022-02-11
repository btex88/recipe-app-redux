// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Misc
import BOOK_COVER_ICON from '../img/book-cover-icon.png';
import verifyEmail from '../services/verify-email';
import saveLocalstorage from '../services/save-localstorage';

// Components
import * as COMP from '../components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwd: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderLoginInputs = this.renderLoginInputs.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  handleChange(event) {
    const SIX = 6;
    const { id, value } = event.target;
    this.setState({ [id]: value }, () => {
      const { email, passwd } = this.state;
      if (verifyEmail(email) && passwd.length > SIX) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
  }

  handleClick() {
    const { email } = this.state;
    const { history } = this.props;
    saveLocalstorage('mealsToken', 1);
    saveLocalstorage('cocktailsToken', 1);
    saveLocalstorage('user', { email });
    history.push('/comidas');
  }

  renderLoginInputs() {
    const { email, passwd } = this.state;
    return (
      <>
        <COMP.LoginInput
          id="email"
          testId="email-input"
          label="Email"
          type="email"
          placeholder="your_email@domain.com"
          inputValue={ email }
          handleChange={ this.handleChange }
        />
        <COMP.LoginInput
          id="passwd"
          testId="password-input"
          label="Password"
          type="password"
          placeholder="********"
          inputValue={ passwd }
          handleChange={ this.handleChange }
        />
      </>
    );
  }

  renderLoginButton() {
    const { isDisabled } = this.state;
    return (
      <COMP.LoginButton
        testId="login-submit-btn"
        label="Login"
        isDisabled={ isDisabled }
        handleClick={ this.handleClick }
      />
    );
  }

  render() {
    return (
      <div className=" h-full w-full flex flex-col justify-center">
        <h1
          data-testid="login-title"
          className="text-4xl text-center mb-8 font-bold text-red-900 antialiased"
          style={ { animation: 'blink 5s ease-in-out infinite' } }
        >
          myRecipe App
        </h1>
        <img
          data-testid="login-logo-img"
          src={ BOOK_COVER_ICON }
          alt="Recipe Book"
          className="object-contain justify-self-end h-36"
        />
        <div className="w-72 mx-auto flex flex-col items-center mt-16">
          {this.renderLoginInputs()}
          {this.renderLoginButton()}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Login;
