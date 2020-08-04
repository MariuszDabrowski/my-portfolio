import React from 'react';
import PropTypes from 'prop-types';

const ProjectSelectionItem = ({ project, active, toggleActiveProject }) => {
  return (
    <button
      type="button"
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

ProjectSelectionItem.propTypes = {
  project: PropTypes.shape({
    company: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  toggleActiveProject: PropTypes.func.isRequired,
};

export default ProjectSelectionItem;
