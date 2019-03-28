import React from 'react';
import { shallow } from 'enzyme';
import { MiniPalette, mapDispatchToProps } from './MiniPalette';
import * as mockData from '../../mockData';
import { deletePaletteThunk } from '../../Thunks/deletePaletteThunk';
import * as actions from '../../Actions';
import thunk from 'redux-thunk';

jest.mock('../../Thunks/deletePaletteThunk.js');

describe('MiniPalette', () => {
  const mockPalette = mockData.mockProjectPalettes[0];
  const mockColorsOnly = [
    mockPalette.color1,
    mockPalette.color2,
    mockPalette.color3,
    mockPalette.color4,
    mockPalette.color5
  ];
  describe('MiniPalette component', () => {
    let wrapper;
    const mockDeletePaletteThunk = jest.fn();
    const mockExpandMiniPalette = jest.fn();

    beforeEach(() => {
      jest.mock('../../Thunks/deletePaletteThunk.js');
      wrapper = shallow(<MiniPalette {...mockPalette} deletePaletteThunk={mockDeletePaletteThunk} expandMiniPalette={mockExpandMiniPalette} />);
    });
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call deletePalette when the icon is clicked', () => {
      const instance = wrapper.instance();
      jest.spyOn(instance, 'deletePalette');
      wrapper.instance().forceUpdate()
      wrapper.find('i').simulate('click');
      expect(instance.deletePalette).toHaveBeenCalled();
    });

    it('should call deletePaletteThunk with id and project id when icon is click', () => {
      wrapper.find('i').simulate('click');
      expect(mockDeletePaletteThunk).toHaveBeenCalledWith(mockPalette.id, mockPalette.project_id);
    });

    it('should call expandPalette when MiniPalette--div--colors is clicked', () => {
      const instance = wrapper.instance();
      jest.spyOn(instance, 'expandPalette');
      wrapper.instance().forceUpdate()
      wrapper.find('.MiniPalette--div--colors').simulate('click');
      expect(instance.expandPalette).toHaveBeenCalled();
    });

    it('should call expandMiniPalette with the colors from the palette when MiniPalette--div--colors is clicked', () => {
      wrapper.find('.MiniPalette--div--colors').simulate('click');
      expect(mockExpandMiniPalette).toHaveBeenCalledWith(mockColorsOnly);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should call dispatch with expandMiniPalette action when expandMiniPalette is called', () => {
      const actionToDispatch = actions.expandMiniPalette(mockColorsOnly);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.expandMiniPalette(mockColorsOnly);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with deletPaletteThunk when deletePaletteThunk is called', () => {
      const thunkToDispatch = deletePaletteThunk(mockPalette.id, mockPalette.project_id);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deletePaletteThunk(mockPalette.id, mockPalette.project_id);
      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch);      
    });
  });
});