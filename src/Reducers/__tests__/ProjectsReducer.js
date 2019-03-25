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
    expect(result).toEqual(mockProjects)
  });
});