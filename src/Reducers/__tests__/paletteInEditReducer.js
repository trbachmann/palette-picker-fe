import { paletteInEditReducer } from '../paletteInEditReducer';
import * as mockData from '../../mockData';
import * as actions from '../../Actions';

describe('paletteInEditReducer', () => {
  const mockPalette = mockData.mockPaletteBeforeUpdate;

  it('should return the default state', () => {
    const expected = '';
    const result = paletteInEditReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a palette', () => {
    const expected = mockPalette;
    const initialState = ''
    const result = paletteInEditReducer(initialState, actions.updatePaletteInEdit(mockPalette));
    expect(result).toEqual(expected);
  });

  it('should return an empty string to clear the palette in edit', () => {
    const expected = '';
    const initialState = mockPalette;
    const result = paletteInEditReducer(initialState, actions.clearPaletteInEdit());
    expect(result).toEqual(expected);
  });
});