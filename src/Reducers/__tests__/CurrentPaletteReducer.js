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

  it('should set the current palette to mini palette that is expanded', () => {
    const mockColors = mockData.mockMinPaletteToExpand;
    const initialState = [...mockData.mockPalette];
    const expected = [...mockData.mockColorsAfterExpand];
    const result = currentPaletteReducer(initialState, actions.expandMiniPalette(mockColors));
    expect(result).toEqual(expected);
  });

  it('should update the isLocked property on a palette color', () => {
    const initialState = mockData.mockPalette;
    const mockIndex = 3;
    const expected = mockData.mockPaletteAfterLock;
    const result = currentPaletteReducer(initialState, actions.updateIsLocked(mockIndex));
    expect(result).toEqual(expected);
  });
});