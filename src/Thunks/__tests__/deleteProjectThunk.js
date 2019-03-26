import { deleteProjectThunk } from '../deleteProjectThunk';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';

describe('deleteProjectThunk', () => {
  const mockDispatch = jest.fn();
  const mockProjId = 5;
  const mockError = `No project exists with id: ${mockProjId}`;
  const thunk = deleteProjectThunk(mockProjId);
  utils.fetchData = jest.fn();

  beforeEach(() => {
    utils.fetchData = jest.fn().mockImplementation(() => Promise.resolve({ status: 204 }));
  });

  it('should call dispatch with toggleLoading true', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with /palettes/:id', async () => {
    const mockOptions = utils.createOptions('DELETE');
    const mockPath = `/projects/${mockProjId}`;
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockPath, mockOptions);
  });

  it('should call dispatch with toggleLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with deleteProject and an id', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.deleteProject(mockProjId));
  });

  it('should call dispatch with toggleLoading and false if no project with id exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));    
  });

  it('should call dispatch with setError and a message if no projects with id exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(mockError));
  });
});