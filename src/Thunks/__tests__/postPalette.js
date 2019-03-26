import { postPalette } from '../postPalette';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';
import * as mockData from '../../mockData';

describe('postPalette', () => {
  const mockDispatch = jest.fn();
  const mockProjectId = 1;
  const mockPalette = { 
    name: 'Pretty Pinks',
    ...mockData.mockPalette
  };
  const mockPaletteId = 2;
  const thunk = postPalette(mockProjectId, mockPalette);

  beforeEach(() => {
    utils.fetchData = jest.fn().mockImplementation(() => Promise.resolve({ id: mockPaletteId }));
  });

  it('should call dispatch with toggleLoading with true', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with /palettes a palette and project id', async () => {
    const mockOptions = utils.createOptions('POST', { ...mockPalette, project_id: mockProjectId });
    const mockPath = '/palettes';
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockPath, mockOptions);
  });

  it('should call dispatch with toggleLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with addPaletteToProject  with a palettes', async () => {
    const expected = {
      ...mockPalette,
      id: mockPaletteId,
      project_id: mockProjectId
    }
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.addPaletteToProject (mockProjectId, expected));
  });

  it('should call dispatch with toggleLoading and false if everything is not okay with fetchData', async () => {
    const mockId = 0;
    const expectedError = `Cannot add a palette without a project. No project exists with id: ${mockId}`;
    utils.fetchData = jest.fn().mockImplementation(() => {
      throw new Error(expectedError)
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with setError and a message if everything is not okay with fetchData', async () => {
    const mockId = 0;
    const expectedError = `Cannot add a palette without a project. No project exists with id: ${mockId}`;
    utils.fetchData = jest.fn().mockImplementation(() => {
      throw new Error(expectedError)
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(expectedError));
  });
});