import { currentPaletteReducer } from '../CurrentPaletteReducer';
import * as actions from '../../Actions';
import * as mockData from '../../mockData';

describe('currentPaletteReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = currentPaletteReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set the current palette', () => {
    const mockPalette = mockData.mockPalette;
    const initialState = [];
    const result = currentPaletteReducer(initialState, actions.setPaletteColors(mockPalette));
    expect(result).toEqual(mockPalette);
  });
});