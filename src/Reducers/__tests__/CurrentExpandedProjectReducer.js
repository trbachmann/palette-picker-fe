import { currentExpandedProjectReducer } from '../CurrentExpandedProjectReducer';
import * as actions from '../../Actions';

describe('currentExpandedProjectReducer', () => {
  it('should return the default state', () => {
    const expected = '';
    const result = currentExpandedProjectReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set the current expanded project', () => {
    const initialState = '';
    const result = currentExpandedProjectReducer(initialState, actions.setCurrentExpandedProject(1));
    expect(result).toBe(1);
  })
});