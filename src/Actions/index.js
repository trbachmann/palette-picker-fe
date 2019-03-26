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

export const setCurrentExpandedProject = (id) => ({
  type: 'SET_CURRENT_EXPANDED_PROJECT',
  id
})
export const addProject = (name, id) => ({
  type: 'ADD_PROJECT',
  name,
  id
});

export const addPaletteToProject = (projectId, palette) => ({
  type: 'ADD_PALETTE',
  projectId,
  palette
});