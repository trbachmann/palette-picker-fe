import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';
import Project from '../Project/Project';

export default class extends Component{
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
        <form autocomplete='off'>
          <button>Create New Project</button>
          <input placeholder='Project Name' name='name' value={this.state.name}/>
        </form>
        <ProjectArea/>
      </div>
    )
  }
}