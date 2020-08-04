import React from 'react';
import PropTypes from 'prop-types';

import ProjectSelectionItem from './ProjectSelectionItem';

const ProjectSelection = ({
  projects,
  projectCategory,
  activeProject,
  setActiveProject,
}) => {
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
            active={activeProject[projectCategory].id === project.id}
            toggleActiveProject={toggleActiveProject}
          />
        );
      })}
    </div>
  );
};

ProjectSelection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectCategory: PropTypes.string.isRequired,
  activeProject: PropTypes.shape().isRequired,
  setActiveProject: PropTypes.func.isRequired,
};

export default ProjectSelection;
