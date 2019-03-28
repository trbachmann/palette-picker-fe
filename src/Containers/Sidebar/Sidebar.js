import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';
import { postProject } from '../../Thunks/postProject';
import { connect } from 'react-redux';

export class Sidebar extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      error: ''
    };
  };
  
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { projects } = this.props;
    const foundName = projects.find(project => {
      return name.toLowerCase() === project.name.toLowerCase()
    })
    if (foundName) {
      this.setState({error: 'That project name is already taken! Please enter a different one.'})
    } else {
      this.props.postProject(name);
      this.setState({name: '', error: ''});
    }
  };

  render() {
    const { error } = this.state;
    return(
      <div className='Sidebar--div'>
        <h2>My Projects</h2>
        { error && <p>{error}</p>}
        <form 
          autoComplete='off' 
          onSubmit={this.handleSubmit}>
          <input 
            placeholder='Enter New Project Name' 
            name='name' 
            value={this.state.name} 
            onChange={this.handleChange}/>
          <button>Create New Project</button>
        </form>
        <ProjectArea/>
      </div>
    )
  };
};

export const mapDispatchToProps = dispatch => ({
  postProject: (name) => dispatch(postProject(name))
});

export const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);