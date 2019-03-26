import { toggleLoading, setError, replacePalette } from '../Actions';
import { fetchData, createOptions } from '../Utils/fetch';

export const putPaletteThunk = (palette) => {
  return async (dispatch) => {
    const url = `/palettes/${palette.id}`;
    const options = createOptions('PUT', palette)
    try {
      dispatch(toggleLoading(true));
      await fetchData(url, options);
      dispatch(toggleLoading(false));
      dispatch(replacePalette(palette));
    } catch(error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
}