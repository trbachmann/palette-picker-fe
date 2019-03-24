import React from 'react';
import { shallow } from 'enzyme';
import ColorSwatch from './ColorSwatch';

describe('ColorSwatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorSwatch/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});