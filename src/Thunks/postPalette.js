import { toggleLoading, setError, addPaletteToProject } from '../Actions';
import { fetchData, createOptions } from '../Utils/fetch';

export const postPalette = (projectId, palette) => {
  return async (dispatch) => {
    const url = '/palettes';
    const options = createOptions('POST', { ...palette, project_id: projectId });
    try {
      dispatch(toggleLoading(true));
      const paletteId = await fetchData(url, options);
      dispatch(toggleLoading(false));
      dispatch(addPaletteToProject(projectId, {...palette, id: paletteId.id }));
    } catch (error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message))
    }
  }
} 