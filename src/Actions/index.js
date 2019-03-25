export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const updateProject = (projectPalettes) => ({
  type: 'UPDATE_PROJECT',
  projectPalettes
})

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});

export const toggleLoading = (bool) => ({
  type: 'TOGGLE_LOADING',
  isLoading: bool
});

export const setPaletteColors = (colors) => ({
  type: 'SET_PALETTE_COLORS',
  palette: colors
});
