import { toggleLoading, setError, deletePalette } from '../Actions';
import { fetchData, createOptions } from '../Utils/fetch';

export const deletePaletteThunk = (paletteId, projectId) => {
  return async (dispatch) => {
    const url = `/palettes/${paletteId}`;
    const options = createOptions('DELETE');
    try {
      dispatch(toggleLoading(true));
      await fetchData(url, options);
      dispatch(toggleLoading(false));
      dispatch(deletePalette(paletteId, projectId));
    } catch(error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
}