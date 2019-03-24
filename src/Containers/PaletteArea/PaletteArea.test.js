import React from 'react';
import { shallow } from 'enzyme';
import { PaletteArea } from './PaletteArea';

describe('PaletteArea', () => {
  describe('PaletteArea component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<PaletteArea/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});