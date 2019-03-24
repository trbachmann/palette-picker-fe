import { toggleLoading, setError, setProjects } from '../Actions';
import { fetchData } from '../Utils/fetch';

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading(true));
      const projects = await fetchData('/projects');
      dispatch(toggleLoading(false));
      dispatch(setProjects(projects));
    } catch (error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
};