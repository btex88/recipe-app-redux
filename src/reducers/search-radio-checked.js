const INIT = 'ingredient';
const INGREDIENT = 'INGREDIENT';
const NAME = 'NAME';
const FIRST_LETTER = 'FIRST_LETTER';

const searchRadioChecked = (state = INIT, action) => {
  if (action.type === INGREDIENT) return INIT;
  if (action.type === NAME) return 'name';
  if (action.type === FIRST_LETTER) return 'firstLetter';
  return state;
};

export default searchRadioChecked;
