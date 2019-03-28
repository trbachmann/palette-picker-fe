import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar, mapStateToProps, mapDispatchToProps } from './Sidebar';
import * as mockData from '../../mockData';
import { postProject } from '../../Thunks/postProject';
import { wrap } from 'module';

jest.mock('../../Thunks/postProject.js');

describe('Sidebar', () => {
  describe('Sidebar component', () => {
    let wrapper;
    const mockProjects = mockData.mockProjectsWithEmptyPalettes;
    const mockPostProject = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn()
    };
    const newProjName = 'Pretty Purples';

    beforeEach(() => {
      wrapper = shallow(<Sidebar projects={mockProjects} postProject={mockPostProject}/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should invoke handleChange when a user types a new project name and update state', () => {
      expect(wrapper.state('name')).toEqual('');
      const mockEvent = {
        target: { value: newProjName }
      };
      wrapper.find('input').simulate('change', mockEvent);
      expect(wrapper.state('name')).toEqual(newProjName);
    });

    it('should invoke handleSubmit when a user clicks Create New Project and submits form', () => {
      const instance = wrapper.instance();
      jest.spyOn(instance, 'handleSubmit');
      wrapper.instance().forceUpdate()
      wrapper.find('form').simulate('submit', mockEvent);
      expect(instance.handleSubmit).toHaveBeenCalled();
    });

    it('should handleSubmit and call postProject with name and reset state', () => {
      wrapper.setState({ name: newProjName });
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockPostProject).toHaveBeenCalledWith(newProjName);
      expect(wrapper.state('name')).toEqual('');
    });

    it('should set an error and match snapshot with error if the project name already exists', () => {
      const mockDuplicateName = mockProjects[0].name;
      wrapper.setState({ name: mockDuplicateName });
      wrapper.instance().handleSubmit(mockEvent);
      const expectedError = 'That project name is already taken! Please enter a different one.'
      expect(wrapper.state('error')).toEqual(expectedError);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with a projects property', () => {
      const initialState = {
        projects: mockData.mockProjectsWithEmptyPalettes,
        error: '',
        isLoading: false
      };
      const expected = {
        projects: mockData.mockProjectsWithEmptyPalettes
      };
      const mappedProps = mapStateToProps(initialState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('should call dispatch with a postProject action when postProject is called', () => {
      const mockName = 'Movie Tracker'
      const thunkToDispatch = postProject(mockName);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.postProject(mockName);
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch);
    });
  });
});