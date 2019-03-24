import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  describe('Sidebar component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Sidebar />);
    });

    it('should match the snapshit', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});