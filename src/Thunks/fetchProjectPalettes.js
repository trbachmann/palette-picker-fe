import { addProjectPalettes, setError, toggleLoading } from '../Actions';
import { fetchData } from '../Utils/fetch';

export const fetchProjectPalettes = (id) => {
  return async (dispatch) => {
    try{
      dispatch(toggleLoading(true));
      const projectPalettes = await fetchData(`/projects/${id}/palettes`);
      dispatch(toggleLoading(false));
      dispatch(addProjectPalettes(projectPalettes, id))
    } catch (error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
};