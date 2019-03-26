import { putPaletteThunk } from '../putPaletteThunk';
import * as actions from '../../Actions';
import * as utils from '../../Utils/fetch';
import { mockPaletteWithUpdates } from '../../mockData';

describe('putPaletteThunk', () => {
  const mockDispatch = jest.fn();
  const thunk = putPaletteThunk(mockPaletteWithUpdates);
  utils.fetchData = jest.fn();
  const mockError = `No palette exists with the id: ${mockPaletteWithUpdates.id}`;

  it('should call dispatch with toggleLoading and true', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(true));
  });

  it('should call fetchData with /palettes/:id and a palette', async () => {
    const mockUrl = `/palettes/${mockPaletteWithUpdates.id}`;
    const mockOptions = utils.createOptions('PUT', mockPaletteWithUpdates);
    await thunk(mockDispatch);
    expect(utils.fetchData).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should call dispatch with toggleLoading and false', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with replacePalette and mockPaletteWithUpdates', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.replacePalette(mockPaletteWithUpdates));
  });

  it('should call dispatch with toggleLoading and false if no palette with id exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError)});
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.toggleLoading(false));
  });

  it('should call dispatch with setError and a message if no palette with id exists', async () => {
    utils.fetchData = jest.fn().mockImplementation(() => { throw new Error(mockError) });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError(mockError));
  });
});