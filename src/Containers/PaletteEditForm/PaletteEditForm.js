import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PaletteEditForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      projectId: ''
    }
  }

  componentDidMount = () => {
    this.setState({ name: this.props.paletteInEdit.name })
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  }

  setProject = (event) => {
    const { value } = event.target;
    this.setState({ projectId: value });
  }

  handleUpdate = () => {
    //grab current palette from redux
    // reassign colors to the palette
    // grab a new project id if there is one in local state
    // then dispatch updating the palette
    // clear palette in edit in the store
    // clear local state and reset the form
  }

  render() {
    const { projects, paletteInEdit } = this.props;
    const options = projects.map(project => {
      if(project.id === paletteInEdit.project_id) {
        return <option value='default' key={project.name}>{project.name}</option>
      }
      return <option value={project.id} key={project.name}>{project.name}</option>
    })
    return(
      <div className='PaletteEditForm--div'>
        <form className='PaletteEditForm--form'>
          <select onChange={this.setProject}>
            {options}
          </select>
          <input value={this.state.name} onChange={this.handleChange}/>
          <button onClick={this.handleUpdate}>Update Palette</button>
        </form>
        <button>Cancel</button>
        <button>Save As New Palette</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  paletteInEdit: state.paletteInEdit,
  projects: state.projects,
  currentPaletteColors: state.currentPalette
});

export default connect(mapStateToProps)(PaletteEditForm);