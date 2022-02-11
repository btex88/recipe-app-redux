// React dependencies
import React from 'react';

class ContinueRecipeButton extends React.Component {
  render() {
    return (
      <div
        className="py-4 w-full bg-red-50 flex justify-center fixed bottom-0"
        data-testid="start-recipe-btn"
      >
        <button
          type="button"
          className="border-2 border-red-800 bg-red-200 hover:bg-red-800
          hover:text-gray-100 text-red-900 block text-center py-3 px-16 text-sm rounded
          cursor-pointer font-bold"
        >
          Continuar Receita
        </button>
      </div>
    );
  }
}

export default ContinueRecipeButton;
