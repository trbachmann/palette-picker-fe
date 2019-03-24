import React from 'react';
import { shallow } from 'enzyme';
import { ProjectArea } from './ProjectArea';

describe('ProjectArea', () => {
  describe('ProjectArea component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<ProjectArea/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});