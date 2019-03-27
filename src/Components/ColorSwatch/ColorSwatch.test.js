import React from 'react';
import { shallow } from 'enzyme';
import ColorSwatch from './ColorSwatch';
import * as mockData from '../../mockData';

describe('ColorSwatch', () => {
  let wrapper;
  const mockColor = mockData.mockPalette[0];
  const mockLockedColor = {...mockColor, isLocked: true };
  const mockIndex = 2;
  const mockUpdateIsLocked = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ColorSwatch {...mockColor} index={mockIndex} updateIsLocked={mockUpdateIsLocked}/>);
  });

  it('should match the snapshot when a color is unlocked', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when a color is locked', () => {
    wrapper = shallow(<ColorSwatch {...mockLockedColor} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateIsLocked when a user clicks the icon', () => {
    wrapper.find('i').simulate('click');
    expect(mockUpdateIsLocked).toHaveBeenCalled();
  });
});