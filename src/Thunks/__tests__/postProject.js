import { postProject } from '../postProject';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';

describe('postProjects', () => {
  const mockDispatch = jest.fn();
  const mockName = 'Lovely Lavenders';
  const thunk = postProject(mockName);
  const mockNamingError = 'Project name already exists.';
  const mockId = 3;

  beforeEach(() => {
    utils.fetchData = jest.fn().mockImplementation(() => Promise.resolve({ id: mockId}));
  });

  it('should call dispatch with toggleLoading with true', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with /projects and a project name', async () => {
    const mockOptions = utils.createOptions('POST', { name: mockName });
    const mockPath = '/projects';
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockPath, mockOptions);
  });

  it('should call dispatch with toggleLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with addProject with a name and id', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.addProject(mockName, mockId));
  });

  it('should call dispatch with toggleLoading with false if the name already exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockNamingError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });


  it('should call dispatch with setError with a message if the name already exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockNamingError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(mockNamingError));
  });

});