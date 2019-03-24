import React from 'react';
import { shallow } from 'enzyme';
import MiniPalette from './MiniPalette';

describe('MiniPalette', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MiniPalette/>);
    expect(wrapper).toMatchSnapshot();
  });
});