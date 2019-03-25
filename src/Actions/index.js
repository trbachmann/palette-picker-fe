export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const addProjectPalettes = (projectPalettes, id) => ({
  type: 'ADD_PROJECT_PALETTES',
  id,
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
