import { toggleLoading, setError, addProject } from '../Actions';
import { fetchData, createOptions } from '../Utils/fetch';

export const postProject = (projectName) => {
  return async (dispatch) => {
    const url = '/projects';
    const options = createOptions('POST', { name: projectName });
    try {
      dispatch(toggleLoading(true));
      const projectId = await fetchData(url, options);
      dispatch(toggleLoading(false));
      dispatch(addProject(projectName, projectId.id));
    } catch(error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message))
    }
  }
}