import React from 'react';
import { shallow } from 'enzyme';
import { PaletteArea, mapStateToProps } from './PaletteArea';
import * as mockData from '../../mockData';

describe('PaletteArea', () => {
  describe('PaletteArea component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<PaletteArea currentPalette={mockData.mockPalette}/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with currentPalette', () => {
      const mockState = {
        error: '',
        isLoading: false,
        currentPalette: mockData.mockPalette
      }
      const expected = {
        currentPalette: mockData.mockPalette
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});