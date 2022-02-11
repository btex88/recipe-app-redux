// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class SearchBarButton extends React.Component {
  render() {
    const { testId, label, handleClick } = this.props;
    return (
      <div>
        <button
          data-testid={ testId }
          type="button"
          className="bg-red-900 px-2 h-8  text-sm shadow-sm tracking-wider text-red-100
        hover:shadow-2xl hover:bg-red-800 rounded-l"
          onClick={ () => handleClick() }
        >
          {label}
        </button>
      </div>
    );
  }
}

SearchBarButton.propTypes = {
  testId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchBarButton;
