import React from 'react';
import { shallow } from 'enzyme';
import { Project } from './Project';
import { fetchProjectPalettes } from '../../Thunks/fetchProjectPalettes';
import { mapDispatchToProps } from './Project';
import { mapStateToProps } from './Project';

jest.mock('../../Thunks/fetchProjectPalettes');

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
    it('should call dispatch with fetchProjectPalettes', () => {
      const mockDispatch = jest.fn();
      const thunkToDispatch = fetchProjectPalettes(mockDispatch);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchProjectPalettes();
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch);
    })
  })
});