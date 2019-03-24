import React from 'react';
import { shallow } from 'enzyme';
import { MiniPaletteArea } from './MiniPaletteArea';

describe('MiniPaletteArea', () => {
  describe('MiniPaletteArea component', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<MiniPaletteArea/>);
    });
    
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});