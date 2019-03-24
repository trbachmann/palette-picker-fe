import React from 'react';
import { shallow } from 'enzyme';
import { Project } from './Project';

describe('Project', () => {
  describe('Project component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Project/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when expanded is true', () => {
      wrapper.setState({ expanded: true });
      expect(wrapper).toMatchSnapshot();
    });
  });
});