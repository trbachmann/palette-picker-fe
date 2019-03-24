import React, { Component } from 'react';
import PaletteArea from '../PaletteArea/PaletteArea';
import Sidebar from '../Sidebar/Sidebar';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import PaletteForm from '../PaletteForm/PaletteForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export const mapStateToProps = state => ({

})

export const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
