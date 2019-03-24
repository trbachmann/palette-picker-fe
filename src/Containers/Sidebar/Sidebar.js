import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';

export class Sidebar extends Component{
  constructor (){
    super();
    this.state = {
      name: ''
    }
  }

  render() {
    return(
      <div>
        <h2>My Projects</h2>
        <form autoComplete='off'>
          <button>Create New Project</button>
          <input placeholder='Project Name' name='name' value={this.state.name}/>
        </form>
        <ProjectArea/>
      </div>
    )
  }
}

export default Sidebar;