import { fetchProjectPalettes } from '../fetchProjectPalettes';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';
import * as mockData from '../../mockData';

describe('fetchProjectPalettes', () => {
  const mockDispatch = jest.fn();
  const thunk = fetchProjectPalettes(1);
  const mockError = 'No projects found';

  beforeEach(() => {
    utils.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockData.mockProjects));
  });

  it('should call dispatch with toggleLoading with true', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with /projects/1/palettes', async () => {
    const mockPath = '/projects/1/palettes';
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockPath);
  });

  it('should call dispatch with toggleLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with addProjectPalettes with projects', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.addProjectPalettes(mockData.mockProjects));
  });

  it('should call dispatch with toggleLoading with false if fetch is not okay', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with setError with a message if fetch is not okay', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError)});
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(mockError));
  });
})
