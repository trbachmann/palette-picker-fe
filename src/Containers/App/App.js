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

  generatePalette = () => {
    let palette = [...this.props.currentPalette];
    for(let i = 0; i < 5; i++) {
      if (palette[i] && !palette[i].isLocked) {
        let colorCode = this.generateColor();
        palette[i] = { hex: colorCode, isLocked: false };
      } else if (!palette[i]) {
        let colorCode = this.generateColor();
        let color = { hex: colorCode, isLocked: false };
        palette.push(color);
      }
    }
    this.props.setPaletteColors(palette)
  }

  generateColor = () => {
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
    const { error, isLoading } = this.props;
    return (
      <div className='App'>
        <div className='App--header'>
          <h1>Colorations</h1>
          <button onClick={this.generatePalette}>Generate A Palette</button>
          { error && <Error/>}
          { isLoading && <Loading/>}
        </div>
        <PaletteArea/>
        <PaletteForm/>
        <Sidebar/>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  currentPalette: state.currentPalette
})

export const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  setPaletteColors: (palette) => dispatch(setPaletteColors(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
