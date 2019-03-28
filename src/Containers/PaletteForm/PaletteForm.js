import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPalette } from '../../Thunks/postPalette';
import { fetchProjectPalettes } from '../../Thunks/fetchProjectPalettes';

export class PaletteForm extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      projectId: ''
    };
  };

  createPalette = () => {
    const { name } = this.state;
    const {currentPalette} = this.props
    let paletteToAdd = currentPalette.reduce((acc, color, index) => {
      acc[`color${index+1}`] = color.hex
      return acc
    }, {})
    paletteToAdd = {...paletteToAdd, name}
    return paletteToAdd
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const palette = this.createPalette();
    const  projectId  = parseInt(this.state.projectId)
    this.props.fetchProjectPalettes(projectId);
    this.props.postPalette(projectId, palette);
    this.setState({name: '', projectId: ''})
  };

  makeOptions = () => {
    const projectOptions = this.props.projects.map(project => {
      return(
        <option value={project.id} key={project.id}>{project.name}</option>
      )
    })
    return projectOptions
  }

  setProject = (event) => {
    const { value } = event.target;
    this.setState({projectId: value})
  }

  render() {
    return(
      <form 
        onSubmit={this.handleSubmit} 
        className='PaletteForm--form'>
        <select onChange={this.setProject} value={this.state.projectId}>
          <option value='' defaultValue>Choose a Project</option>
          {this.makeOptions()}
        </select>
        <input 
          placeholder='Enter New Palette Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}/>
        <button>Save Palette</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  postPalette: (projectId, palette) => dispatch(postPalette(projectId, palette)),
  fetchProjectPalettes: (projectId) => dispatch(fetchProjectPalettes(projectId))
});

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette,
  projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);