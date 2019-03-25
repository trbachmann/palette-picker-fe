import React, { Component } from 'react';
import PaletteArea from '../PaletteArea/PaletteArea';
import Sidebar from '../Sidebar/Sidebar';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import PaletteForm from '../PaletteForm/PaletteForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProjects } from '../../Thunks/fetchProjects';
import { setPaletteColors } from '../../Actions'

export class App extends Component {
  componentDidMount() {
    this.props.fetchProjects();
    this.generatePalette();
  };

  generatePalette() {
    let palette = [];
    for(let i = 0; i < 5; i++) {
      let colorCode = this.generateColor()
      let color = { hex: colorCode, isLocked: false }
      palette.push(color)
    }
    this.props.setPaletteColors(palette)
  }

  generateColor() {
    let color = '#'
    for(let i=0; i<3; i++) {
      let hexPair = Math.floor(Math.random()*256).toString(16)
      if(hexPair.length < 2){
        hexPair = 0 + hexPair
      }
      color = color + hexPair
    }
    return color
  }

  render() {
    return (
      <div className="App">
        <h1>Colorations</h1>
        <button>Generate A Palette</button>
        <PaletteArea/>
        <PaletteForm/>
        <Sidebar/>
        <Error/>
        <Loading/>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  setPaletteColors: (palette) => dispatch(setPaletteColors(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
