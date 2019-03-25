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
});