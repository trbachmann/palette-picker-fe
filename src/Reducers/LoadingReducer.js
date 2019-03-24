export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return action.isLoading
    default:
      return state
  };
};