import React from 'react';
import Project from '../Project/Project';
import { connect } from 'react-redux';


export const ProjectArea = (props) => {
  const projects = props.projects.map(currentProject => {
    return (<Project {...currentProject} key={currentProject.id}/>)
  })
  return(
    <div>
      {projects}
    </div>
  )
};

export const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps)(ProjectArea);