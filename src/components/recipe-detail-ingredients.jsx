// React dependencies
import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetailIngredients extends React.Component {
  render() {
    const { ingredients } = this.props;
    return (
      <div className="w-full px-4">
        <table
          className="border-b border-gray-200 shadow divide-y divide-gray-300"
        >
          <thead
            className="text-md bg-gray-50"
          >
            <tr>
              <th className="w-full">
                Ingredient
              </th>
              <th className="w-full">
                Qtd
              </th>
            </tr>
          </thead>
          <tbody
            className="border-b border-gray-200 shadow divide-y divide-gray-300"
          >
            {ingredients.map((value, index) => (
              <tr
                key={ `${index}-${value.ingredient}` }
                className="text-sm"
              >
                <td
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  className="pl-4"
                >
                  {value.ingredient}

                </td>
                <td
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  className="pr-4 text-center"
                >
                  {value.quantity}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

RecipeDetailIngredients.propTypes = {
  ingredients: PropTypes.arrayOf({
    ingredient: PropTypes.string,
    quantity: PropTypes.string,
  }).isRequired,
};

export default RecipeDetailIngredients;
