export const currentPaletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTE_COLORS':
      return action.palette
    case 'EXPAND_MINI_PALETTE':
      const palette = action.colors.map(color => {
        return { hex: color, isLocked: false }
      })
      return palette
    default:
      return state
  };
};