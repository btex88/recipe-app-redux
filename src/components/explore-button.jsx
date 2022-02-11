// React dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ExploreButton extends React.Component {
  render() {
    const { label, testId, path } = this.props;
    return (
      <Link to={ path }>
        <button
          data-testid={ testId }
          type="button"
          className="w-64 h-16 bg-red-200 focus:bg-red-300 hover:bg-red-300 border-b-2
          border-red-800 shadow-xl m-2 rounded-sm"
        >
          <span className="text-lg font-medium">{ label }</span>
        </button>
      </Link>
    );
  }
}

ExploreButton.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ExploreButton;
