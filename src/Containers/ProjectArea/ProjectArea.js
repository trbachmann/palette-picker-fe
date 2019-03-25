import React from 'react';
import Project from '../Project/Project';


export const ProjectArea = () => {
  return(
    <div>
      <Project/>
    </div>
  )
};

export const mapStateToProps = state => ({
  projects: state.projects
})
export default ProjectArea;