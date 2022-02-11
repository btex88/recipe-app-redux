// React dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SearchInputRadio extends React.Component {
  render() {
    const { id, testId, label, handleInputRadio, searchRadioChecked } = this.props;
    return (
      <label
        htmlFor={ id }
        className="inline-flex items-center mt-4"
      >
        <input
          data-testid={ testId }
          id={ id }
          type="radio"
          checked={ id === searchRadioChecked }
          onChange={ (event) => handleInputRadio(event) }
        />
        <div
          className="ml-1 text-gray-700 mr-1"
        >
          {label}
        </div>
      </label>
    );
  }
}

SearchInputRadio.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  searchRadioChecked: PropTypes.string.isRequired,
  handleInputRadio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(SearchInputRadio);
