// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends React.Component {
  render() {
    const { id, testId, searchInput, handleChange } = this.props;
    return (
      <div>
        <input
          id={ id }
          data-testid={ testId }
          type="search"
          value={ searchInput }
          className="h-8 block w-60 bg-red-50 border-0 appearance-none focus:outline-none
          focus:ring-0 rounded-r text-center"
          onChange={ (event) => handleChange(event) }
        />
      </div>
    );
  }
}

SearchBarInput.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBarInput;
