import { errorReducer } from '../ErrorReducer';
import * as actions from '../../Actions';

describe('errorReducer', () => {
  it('should return the default state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set an error message', () => {
    const mockError = 'No projects exist';
    const initialState = '';
    const result = errorReducer(initialState, actions.setError(mockError));
    expect(result).toEqual(mockError);
  });
});