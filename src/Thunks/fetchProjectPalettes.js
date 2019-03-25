import { updateProject, setError, setProjects, toggleLoading } from '../Actions';
import { fetchData } from '../Utils/fetch';

export const fetchProjectPalettes = (id) => {
  return async (dispatch) => {
    try{
      dispatch(toggleLoading(true));
      const projectPalettes = await fetchData(`/projects/${id}/palettes`);
      dispatch(toggleLoading(false));
      dispatch(updateProject(projectPalettes))
    } catch (error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
};