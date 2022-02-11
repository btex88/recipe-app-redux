// React dependencies
import React from 'react';

// Misc
import NOT_FOUND_IMG from '../img/chilli-1.png';

class NotFound extends React.Component {
  render() {
    return (
      <div
        className=" h-full w-full flex flex-col items-center justify-evenly text-center
        px-4 bg-red-100"
      >
        <div>
          <h1 className="w-full text-4xl">Not Found</h1>
        </div>
        <img
          src={ NOT_FOUND_IMG }
          alt="Burning Pepper"
          className="object-contain md:max-w-lg"
        />
      </div>
    );
  }
}

export default NotFound;
