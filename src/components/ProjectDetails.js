import React from 'react';

const ProjectDetails = ({ activeProject }) => {
  return (
    <div className="project-details">
      <img src={activeProject.hero} alt="" />
      
      <div className="project-overview">
        <div className="project-overview__item">
          <div className="project-overview__item__title">Company</div>
          <div className="project-overview__item__details">{activeProject.company}</div>
        </div>
      </div>

      <p>{activeProject.description}</p>

    </div>
  );
};

export default ProjectDetails;
