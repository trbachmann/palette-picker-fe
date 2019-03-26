import * as actions from './index';
import * as mockData from '../mockData';

describe('actions', () => {
  it('should return an object with SET_PROJECTS and projects', () => {
    const expected = {
      type: 'SET_PROJECTS',
      projects: mockData.mockProjects
    };
    const result = actions.setProjects(mockData.mockProjects);
    expect(result).toEqual(expected);
  });

  it('should return an object with ADD_PROJECT_PALETTES, id, palettes', () => {
    const mockProjectPalettes = mockData.mockProjectPalettes;
    const expected = {
      type: 'ADD_PROJECT_PALETTES',
      projectPalettes: mockProjectPalettes,
      id: 1
    };
    const result = actions.addProjectPalettes(mockProjectPalettes, 1);
    expect(result).toEqual(expected);
  })

  it('should return an object with SET_ERROR and an error message', () => {
    const mockError = 'Error no projects exist with id 0';
    const expected = {
      type: 'SET_ERROR',
      error: mockError
    };
    const result = actions.setError(mockError);
    expect(result).toEqual(expected);
  });

  it('should return an object with TOGGLE_LOADING and a bool', () => {
    const expected = {
      type: 'TOGGLE_LOADING',
      isLoading: true
    };
    const result = actions.toggleLoading(true);
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_PALETTE_COLORS and a palette', () => {
    const expected = {
      type: 'SET_PALETTE_COLORS',
      palette: mockData.mockPalette
    };
    const result = actions.setPaletteColors(mockData.mockPalette);
    expect(result).toEqual(expected);
  });

  it('should return an object with SET_CURRENT_EXPANDED_PROJECT and an id', () => {
    const expected = {
      type: 'SET_CURRENT_EXPANDED_PROJECT',
      id: 1
    };
    const result = actions.setCurrentExpandedProject(1);
    expect(result).toEqual(expected);
  })
  it('should return an object with ADD_PROJECT a name and id', () => {
    const mockName = 'Pretty Purples';
    const mockId = 2;
    const expected = {
      type: 'ADD_PROJECT',
      name: mockName,
      id: mockId
    }
    const result = actions.addProject(mockName, mockId);
    expect(result).toEqual(expected);
  });

  it('should return an object with ADD_PALETTE a project id and palette', () => {
    const mockProjectId = 1
    const paletteToSave = { 
      name: 'Lavender Shades', 
      ...mockData.mockPalette, 
      id: 2, 
      project_id: mockProjectId
    };
    const expected = {
      type: 'ADD_PALETTE',
      projectId: mockProjectId,
      palette: paletteToSave
    };
    const result = actions.addPaletteToProject(mockProjectId, paletteToSave);
    expect(result).toEqual(expected);
  });

  it('should return an objet with DELETE_PALETTE and a palette id', () => {
    const mockPaletteId = 4;
    const expected = {
      type: 'DELETE_PALETTE',
      paletteId: mockPaletteId
    };
    const result = actions.deletePalette(mockPaletteId);
    expect(result).toEqual(expected);
  })
});