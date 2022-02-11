// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetailVideo extends React.Component {
  render() {
    const { title, url } = this.props;
    return (
      <div
        data-testid="video"
        className="py-2"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={ {
          __html: `<iframe
      width="320"
      height="180"
      title="${title}"
      src="${url.replace(/watch\?v=/gi, 'embed/')}"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture"
      allowFullScreen
    ></iframe>` } }
      />
    );
  }
}

RecipeDetailVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default RecipeDetailVideo;
