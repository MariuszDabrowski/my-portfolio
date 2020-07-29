import React from 'react';

const ProjectSelection = () => {
  return (
    <div className="project-list">
      <button className="project-list__item project-list__item--active">
        <span className="project-list__item__company">Honda</span>
        <span className="project-list__item__description">Motorcycles redesign</span>
        <span className="project-list__item__date">2014</span>
      </button>
      <button className="project-list__item">
        <span className="project-list__item__company">Honda</span>
        <span className="project-list__item__description">Honda.ca redesign</span>
        <span className="project-list__item__date">2014</span>
      </button>
      <button className="project-list__item">
        <span className="project-list__item__company">Nerdblock</span>
        <span className="project-list__item__description">Redesign</span>
        <span className="project-list__item__date">2014</span>
      </button>
    </div>
  );
};

export default ProjectSelection;
