import React from 'react';

const ProjectDetails = ({ activeProject }) => {
  return (
    <div className="project-details">

      <img src={activeProject.hero} alt="" />
      
      {/* <div className="project-overview">
        <div className="project-overview__item">
          <div className="project-overview__item__title">Company</div>
          <div className="project-overview__item__details">{activeProject.company}</div>
        </div>
      </div> */}

      <div dangerouslySetInnerHTML={{__html: activeProject.description}}></div>

      {activeProject.listHeading && (
        <div className="points">
          <h3>{activeProject.listHeading}</h3>
          <ul className="points__list">
            {activeProject.listItems.map(item => {
              return <li className="points__list__item">{item}</li>;
            })}
          </ul>
        </div>
      )}

      {activeProject.splitImages &&
        <div className="images-split">
          {activeProject.splitImages[0].type === 'image' ? (
            <div className={`${activeProject.splitImages[0] ? 'outline' : ''} images-split__left`}>
              <img src={activeProject.splitImages[0].src} alt="" />
            </div>
          ) : (
            <video controls className="images-split__left" src={activeProject.splitImages[0].src} type="video/mp4"></video>
          )}

          {activeProject.splitImages[1].type === 'image' ? (
            <div className={`${activeProject.splitImages[1] ? 'outline' : ''} images-split__right`}>
              <img src={activeProject.splitImages[1].src} alt="" />
            </div>
          ) : (
            <video controls className="images-split__right" src={activeProject.splitImages[1].src} type="video/mp4"></video>
          )}
        </div>
      }

      {activeProject.additionalHero && 
        <img src={activeProject.additionalHero} class="additional-hero" alt="" />
      }

      {activeProject.video && 
        <video controls className="project__video" src={activeProject.video} type="video/mp4"></video>
      }

    </div>
  );
};

export default ProjectDetails;
