export const currentExpandedProjectReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_EXPANDED_PROJECT':
      return action.id
    default: 
      return state
  };
};