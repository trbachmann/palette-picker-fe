export const currentPaletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTE_COLORS':
      return action.palette
    case 'EXPAND_MINI_PALETTE':
      const palette = action.colors.map(color => {
        return { hex: color, isLocked: false }
      })
      return palette
    case 'UPDATE_IS_LOCKED':
      let updatedColors = [...state];
      const colorToUpdate = updatedColors[action.index];
      [ updatedColors[action.index] ] = [ {...colorToUpdate, isLocked: !colorToUpdate.isLocked} ];
      return updatedColors;
    default:
      return state
  };
};