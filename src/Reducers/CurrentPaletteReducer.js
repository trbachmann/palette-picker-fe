export const currentPaletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTE_COLORS':
      return action.palette
    default:
      return state
  };
};