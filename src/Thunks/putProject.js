import { toggleLoading, setError, updateProjectName } from '../Actions';
import { fetchData, createOptions } from '../Utils/fetch';

export const putProject = (name, id) => {
  return async (dispatch) => {
    const url = `/projects/${id}`;
    const options = createOptions('PUT', { name });
    try {
      dispatch(toggleLoading(true));
      await fetchData(url, options);
      dispatch(toggleLoading(false));
      dispatch(updateProjectName(name, id));
    } catch(error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
}