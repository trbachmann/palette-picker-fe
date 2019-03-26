import { toggleLoading, setError, deleteProject } from '../Actions';
import { fetchData, createOptions } from '../Utils/fetch';

export const deleteProjectThunk = (id) => {
  return async (dispatch) => {
    const url = `/projects/${id}`;
    const options = createOptions('DELETE');
    try {
      dispatch(toggleLoading(true));
      await fetchData(url, options);
      dispatch(toggleLoading(false));
      dispatch(deleteProject(id));
    } catch(error) {
      dispatch(toggleLoading(false));
      dispatch(setError(error.message));
    }
  }
}