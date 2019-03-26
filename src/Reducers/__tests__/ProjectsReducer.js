import { projectsReducer } from '../ProjectsReducer';
import * as actions from '../../Actions';
import * as mockData from '../../mockData';

describe('projectsReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = projectsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set projects', () => {
    const mockProjects = mockData.mockProjectsWithEmptyPalettes;
    const initialState = [];
    const result = projectsReducer(initialState, actions.setProjects(mockProjects));
    expect(result).toEqual(mockProjects);
  });

  it('should add palettes to a specific project', () => {
    const mockProjects = mockData.mockProjectsWithFullPalettes;
    const mockPalettes = mockData.mockProjectPalettes;
    const initialState = mockData.mockProjectsWithEmptyPalettes;
    const result = projectsReducer(initialState, actions.addProjectPalettes(mockPalettes, 1));
    expect(result).toEqual(mockProjects);
  });
  
  it('should add a project', () => {
    const mockName = 'Pretty Purples';
    const mockId = 2;
    const initialState = [];
    const expected = [
      {
        name: mockName,
        id: mockId,
        palettes: []
      }
    ]
    const result = projectsReducer(initialState, actions.addProject(mockName, mockId));
    expect(result).toEqual(expected);
  });

  it('should add a palette to a project', () => {
    const mockId = 1;
    const mockProject = {
      name: 'Purples',
      id: mockId,
      palettes: []
    }
    const mockPalette = {
      name: 'Lavender Shades',
      ...mockData.mockPalette,
      id: 2,
      project_id: mockId
    }
    const initialState = [mockProject];
    const expected = [ {...mockProject, palettes: [ mockPalette ] } ];
    const result = projectsReducer(initialState, actions.addPaletteToProject(mockId, mockPalette));
    expect(result).toEqual(expected);
  });
});