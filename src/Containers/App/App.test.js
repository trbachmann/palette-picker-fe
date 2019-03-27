import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../Reducers';
import { fetchProjects } from '../../Thunks/fetchProjects';
import * as mockData from '../../mockData';
import { setPaletteColors } from '../../Actions';

jest.mock('../../Thunks/fetchProjects');

describe('App', () => {
  const mockProps = {
    error: '',
    isLoading: false,
    fetchProjects: jest.fn(),
    setPaletteColors: jest.fn(),
    currentPalette: mockData.mockPalette
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer);
    ReactDOM.render(<Provider store={store}><App {...mockProps}/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('App component', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<App {...mockProps}/>);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call fetchProjects on componentDidMount', () => {
      wrapper.instance().componentDidMount();
      expect(mockProps.fetchProjects).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with an error and isLoading', () => {
      const mockState = {
        error: '',
        isLoading: false,
        projects: []
      }
      const expected = {
        error: '',
        isLoading: false
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with fetchProjects', () => {
      const mockDispatch = jest.fn();
      const thunkToDispatch = fetchProjects();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchProjects();
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch);
    });
  });
});