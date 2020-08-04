import React from 'react';

const ProjectSelectionItem = ({ project, active, toggleActiveProject }) => {
  return (
    <button
      className={`project-list__item ${
        active ? 'project-list__item--active' : ''
      }`}
      onClick={() => toggleActiveProject(project)}
    >
      <span className="project-list__item__company">{project.company}</span>
      <span className="project-list__item__description">
        {project.projectTitle}
      </span>
    </button>
  );
};

export default ProjectSelectionItem;
