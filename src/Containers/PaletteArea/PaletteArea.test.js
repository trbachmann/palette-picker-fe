import React from 'react';
import { shallow } from 'enzyme';
import { PaletteArea } from './PaletteArea';
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
});