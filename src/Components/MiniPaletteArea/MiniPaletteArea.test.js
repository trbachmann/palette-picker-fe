import React from 'react';
import { shallow } from 'enzyme';
import  MiniPaletteArea  from './MiniPaletteArea';
import * as mockData from '../../mockData';

describe('MiniPaletteArea', () => {
  describe('MiniPaletteArea component', () => {
    let wrapper
    const mockProjectPalettes = mockData.mockProjectPalettes
    beforeEach(() => {
      wrapper = shallow(<MiniPaletteArea projectPalettes={mockProjectPalettes}/>);
    });
    
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});