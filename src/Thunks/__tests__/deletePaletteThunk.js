import { deletePaletteThunk } from '../deletePaletteThunk';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';

describe('deletePaletteThunk', () => {
  const mockDispatch = jest.fn();
  const mockPaletteId = 2;
  const mockProjectId = 1;
  const thunk = deletePaletteThunk(mockPaletteId, mockProjectId);
  const mockIdError = 'No palette exists with id: 0';

  beforeEach(() => {
    utils.fetchData = jest.fn().mockImplementation(() => Promise.resolve({ status: 204 }));
  });

  it('should call dispatch with toggleLoading with true', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with /palettes/:id', async () => {
    const mockOptions = utils.createOptions('DELETE');
    const mockPath = `/palettes/${mockPaletteId}`;
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockPath, mockOptions);
  });

  it('should call dispatch with toggleLoading with false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with deletePalette with an id', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.deletePalette(mockPaletteId, mockProjectId));
  });

  it('should call dispatch with toggleLoading with false if no palette with id exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockIdError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with set error with a message if no palette with id exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockIdError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(mockIdError));
  });

});