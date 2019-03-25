import React, { Component } from 'react';
import MiniPaletteArea from '../MiniPaletteArea/MiniPaletteArea';

export class Project extends Component{
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  render() {
    return(
      <div>
        <div>
          <p>{this.props.name}</p>
          <i class="fas fa-pencil-alt"></i>
          <i class="far fa-trash-alt"></i>
        </div>
        {
          this.state.expanded &&
          <MiniPaletteArea/>
        }
      </div>
    )
  }
}

export default Project;