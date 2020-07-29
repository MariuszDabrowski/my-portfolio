import React from 'react';

import placeholder from '../img/placeholder-img.png';

const ProjectDetails = () => {
  return (
    <div className="project-details">
      <img src={placeholder} alt="" />
      
      <div className="project-overview">
        <div className="project-overview__item">
          <div className="project-overview__item__title">Company</div>
          <div className="project-overview__item__details">Honda Canada</div>
        </div>
      </div>

      <p>23 Years ago, I started a long journey called life. The first scene started off on the tiny Caribbean island of Saint Lucia. I always relished the thought of being somewhere bigger, but who knew that very thought would push me to make one of the best decisions of my life thus far.</p>

    </div>
  );
};

export default ProjectDetails;
