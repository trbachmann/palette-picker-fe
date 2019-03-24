import React, { Component } from 'react';
import PaletteArea from '../PaletteArea/PaletteArea';
import Sidebar from '../Sidebar/Sidebar';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import PaletteForm from '../PaletteForm/PaletteForm';
import PropTypes from 'prop-types';

export class App extends Component {
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

export default App;
