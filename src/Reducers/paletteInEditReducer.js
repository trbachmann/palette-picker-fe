export const paletteInEditReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_PALETTE_IN_EDIT':
      return action.palette;
    case 'CLEAR_PALETTE_IN_EDIT':
      return '';
    default:
    return state;
  }
}