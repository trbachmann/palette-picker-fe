export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      const projectsToSet = action.projects.map(project => {
        return {...project, palettes: []}
      })
      return projectsToSet
    case 'ADD_PROJECT_PALETTES':
      const updatedProjects = state.map(project => {
        if(project.id === action.id){
          return {...project, palettes: action.projectPalettes}
        }
        return project
      })
      return updatedProjects
    case 'ADD_PROJECT':
      const projectsWithNewProject = [
        ...state, 
        {
          name: action.name,
          id: action.id,
          palettes: []
        }
      ];
      return projectsWithNewProject
    case 'ADD_PALETTE':
      const projectsWithNewPalette = state.map(project => {
        if(project.id === action.projectId) {
          const projectWithNewPalette = {
            ...project,
            palettes: [...project.palettes, action.palette]
          }
          return projectWithNewPalette;
        }
        return project;
      });
      return projectsWithNewPalette
    case 'DELETE_PALETTE':
      const projectsWithPaletteRemoved = state.map(project => {
        const updatedPalettes = project.palettes.filter(palette => {
          return palette.id !== action.paletteId;
        });
        return { ...project, palettes: updatedPalettes }
      });
      return projectsWithPaletteRemoved
    default:
      return state
  };
};