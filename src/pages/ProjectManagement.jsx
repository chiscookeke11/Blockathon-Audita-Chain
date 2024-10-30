import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import ProjectManagementMain from '../components/project-management-main/ProjectManagementMain';

const ProjectManagement = () => {
  return (
    <div className='project-management-container' >

        <Navbar/>
        <ProjectManagementMain/>

    </div>
  )
}

export default ProjectManagement;