import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';
import { postProject } from '../../Thunks/postProject';
import { connect } from 'react-redux';

export class Sidebar extends Component{
  constructor() {
    super();
    this.state = {
      name: ''
    };
  };
  
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    this.props.postProject(name);
    this.setState({name: ''});
  };

  render() {
    return(
      <div className='Sidebar--div'>
        <h2>My Projects</h2>
        <form 
          autoComplete='off' 
          onSubmit={this.handleSubmit}>
          <button>Create New Project</button>
          <input 
            placeholder='Project Name' 
            name='name' 
            value={this.state.name} 
            onChange={this.handleChange}/>
        </form>
        <ProjectArea/>
      </div>
    )
  };
};

export const mapDispatchToProps = dispatch => ({
  postProject: (name) => dispatch(postProject(name))
});

export default connect(null, mapDispatchToProps)(Sidebar);