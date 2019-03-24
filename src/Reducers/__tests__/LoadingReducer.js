import { loadingReducer } from '../LoadingReducer';
import * as actions from '../../Actions';

describe('loadingReducer', () => {
  it('should return the default state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set isLoading to a bool', () => {
    const mockBool = true;
    const initialState = false;
    const result = loadingReducer(initialState, actions.toggleLoading(mockBool));
    expect(result).toEqual(mockBool);
  });
});