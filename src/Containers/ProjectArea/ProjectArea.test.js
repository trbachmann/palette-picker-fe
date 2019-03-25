import React from 'react';
import { shallow } from 'enzyme';
import { ProjectArea } from './ProjectArea';
import * as mockData from '../../mockData'
import { mapStateToProps } from '../ProjectArea/ProjectArea';

describe('ProjectArea', () => {
  describe('ProjectArea component', () => {
    let wrapper;
    const mockProps = {
      projects: mockData.mockProjects
    }

    beforeEach(() => {
      wrapper = shallow(<ProjectArea {...mockProps}/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with projects', () => {
      const mockState = {
        projects: mockData.mockProjects,
        error: 'Oh no! Error!'
      }
      const expected = {
        projects: mockData.mockProjects,
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
});