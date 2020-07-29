import React from 'react';

import ProjectSelectionItem from './ProjectSelectionItem';

const ProjectSelection = ({ projects, projectCategory, activeProject, setActiveProject }) => {
  const toggleActiveProject = (project) => {
    const updatedActiveProject = JSON.parse(JSON.stringify(activeProject));
    updatedActiveProject[projectCategory] = project;

    setActiveProject(updatedActiveProject);
  };

  return (
    <div className="project-list">
      {projects.map((project) => {
        return (
          <ProjectSelectionItem
            key={`project-link-${project.id}`}
            project={project}
            active={(activeProject[projectCategory].id === project.id) ? true : false}
            toggleActiveProject={toggleActiveProject}
          />
        );
      })}
    </div>
  );
};

export default ProjectSelection;
