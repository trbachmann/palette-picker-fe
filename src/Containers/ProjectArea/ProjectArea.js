import React from 'react';
import Project from '../Project/Project';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const ProjectArea = (props) => {
  const projects = props.projects.map(currentProject => {
    return (<Project {...currentProject} key={currentProject.id}/>)
  })
  return(
    <div className='ProjectArea--div'>
      {projects}
    </div>
  )
};

export const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps)(ProjectArea);

ProjectArea.propTypes = {
  projects: PropTypes.array
}
