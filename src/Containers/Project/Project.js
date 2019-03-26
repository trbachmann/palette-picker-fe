import React, { Component } from 'react';
import MiniPaletteArea from '../MiniPaletteArea/MiniPaletteArea';
import { fetchProjectPalettes } from '../../Thunks/fetchProjectPalettes';
import { setCurrentExpandedProject } from '../../Actions';
import { connect } from 'react-redux';

export class Project extends Component{
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }
  
  fetchPalettes = async () => {
    const { id, currentExpandedProject } = this.props
    if(id === currentExpandedProject) {
      this.props.setCurrentExpandedProject('')
    } else {
      this.props.setCurrentExpandedProject(id)
    }
    if(!this.props.palettes.length){
      await this.props.fetchProjectPalettes(id)
    }
  }

  render() {
    const { name, palettes, id, currentExpandedProject } = this.props
    return(
      <div>
        <div onClick={this.fetchPalettes}>
          <p>{name}</p>
          <i className="fas fa-pencil-alt"></i>
          <i className="far fa-trash-alt"></i>
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
  setCurrentExpandedProject: (id) => dispatch(setCurrentExpandedProject(id))
})

export const mapStateToProps = state => ({
  currentExpandedProject: state.currentExpandedProject
})

export default connect(mapStateToProps, mapDispatchToProps)(Project);
