import React from 'react';
import { shallow } from 'enzyme';
import { PaletteForm } from './PaletteForm';
import * as mockData from '../../mockData';

describe('PaletteForm', () => {
  const mockProjects = mockData.mockProjects
  describe('PaletteForm component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<PaletteForm projects={mockProjects}/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});