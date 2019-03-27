import React, { Component } from 'react';
import MiniPaletteArea from '../../Components/MiniPaletteArea/MiniPaletteArea';
import { fetchProjectPalettes } from '../../Thunks/fetchProjectPalettes';
import { deleteProjectThunk } from '../../Thunks/deleteProjectThunk';
import { setCurrentExpandedProject } from '../../Actions';
import { connect } from 'react-redux';

export class Project extends Component{
  checkIfCurrentExpandedProject = () => {
    const {id, currentExpandedProject } = this.props
    if(id === currentExpandedProject) {
      this.props.setCurrentExpandedProject('')
    } else {
      this.props.setCurrentExpandedProject(id)
    }
  }

  deleteProject = () => {
    const { id, deleteProjectThunk } = this.props
    deleteProjectThunk(id);
  }

  fetchPalettes = async () => {
    const { id } = this.props
    if(!this.props.palettes.length){
      await this.props.fetchProjectPalettes(id)
      this.checkIfCurrentExpandedProject()
    } else {
      this.checkIfCurrentExpandedProject()
    }
  }
  
  render() {
    const { name, palettes, id, currentExpandedProject } = this.props
    return(
      <div>
        <div onClick={this.fetchPalettes}>
          <p>{name}</p>
          <i className="fas fa-pencil-alt"></i>
          <i className="far fa-trash-alt" onClick={this.deleteProject}></i>
        </div>
        {
          id ===  currentExpandedProject &&
          <MiniPaletteArea projectPalettes={palettes}/>
        }
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchProjectPalettes: (id) => dispatch(fetchProjectPalettes(id)),
  setCurrentExpandedProject: (id) => dispatch(setCurrentExpandedProject(id)),
  deleteProjectThunk: (id) => dispatch(deleteProjectThunk(id))
})

export const mapStateToProps = state => ({
  currentExpandedProject: state.currentExpandedProject
})

export default connect(mapStateToProps, mapDispatchToProps)(Project);
