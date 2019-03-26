import React from 'react';
import { shallow } from 'enzyme';
import { Project } from './Project';
import { fetchProjectPalettes } from '../../Thunks/fetchProjectPalettes';
import { deleteProjectThunk } from '../../Thunks/deleteProjectThunk';
import { setCurrentExpandedProject } from '../../Actions';
import { mapDispatchToProps } from './Project';
import { mapStateToProps } from './Project';

jest.mock('../../Thunks/fetchProjectPalettes');
jest.mock('../../Thunks/deleteProjectThunk');

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

  describe('mapStateToProps', () => {
    it('should return an object with the currentExpandedProject', () => {
      const mockState = {
        isLoading: false,
        error: '', 
        currentExpandedProject: 1
      };
      const expected = {
        currentExpandedProject: 1
      };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should call dispatch with fetchProjectPalettes', () => {
      const thunkToDispatch = fetchProjectPalettes(mockDispatch);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchProjectPalettes();
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch);
    })

    it('should call dispatch with setCurrentExpandedProject', () => {
      const actionToDispatch = setCurrentExpandedProject(1);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentExpandedProject(1);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with deleteProjectThunk', () => {
      const thunkToDispatch = deleteProjectThunk(mockDispatch);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteProjectThunk();
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch);
    });
  });
});