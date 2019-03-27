import { putProject } from '../putProject';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';

describe('putProject', () => {
  const mockDispatch = jest.fn();
  utils.fetchData = jest.fn();
  const mockName = 'Peachy Palette';
  const mockId = 3;
  const thunk = putProject(mockName, mockId);
  const mockError = `No project exists with the id ${mockId}`;
  
  it('should call dispatch with toggleLoading with true', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with a name and id', async () => {
    const mockUrl = `/projects/${mockId}`;
    const mockOptions = utils.createOptions('PUT', { name: mockName });
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should call dispatch with toggleLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should dispatch with updateProjectName and a name', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.updateProjectName(mockName, mockId));
  });

  it('should call dispatch with toggleLoading with false if no project exists in db', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with setError and a message if no project exists in db', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(mockError));
  });
});