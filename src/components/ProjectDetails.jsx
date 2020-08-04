import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetails = ({ activeProject }) => {
  return (
    <div className="project-details">
      <div className="image-container">
        <img src={activeProject.hero} alt="" />
      </div>

      <div className="project-overview">
        <div className="project-overview__item">
          <div className="project-overview__item__title">Company</div>
          <div className="project-overview__item__details">
            {activeProject.company}
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: activeProject.description }} />

      {activeProject.listHeading && (
        <div className="points">
          <h3>{activeProject.listHeading}</h3>
          <ul className="points__list">
            {activeProject.listItems.map((item) => {
              return (
                <li key={item} className="points__list__item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {activeProject.splitImages && (
        <div className="images-split">
          {activeProject.splitImages[0].type === 'image' ? (
            <div
              className={`${
                activeProject.splitImages[0].outline ? 'outline' : ''
              } images-split__left`}
            >
              <img src={activeProject.splitImages[0].src} alt="" />
            </div>
          ) : (
            <div
              className={`${
                activeProject.splitImages[0].outline ? 'outline' : ''
              } images-split__left`}
            >
              <video
                controls
                src={activeProject.splitImages[0].src}
                type="video/mp4"
              />
            </div>
          )}

          {activeProject.splitImages[1].type === 'image' ? (
            <div
              className={`${
                activeProject.splitImages[1].outline ? 'outline' : ''
              } images-split__right`}
            >
              <img src={activeProject.splitImages[1].src} alt="" />
            </div>
          ) : (
            <div
              className={`${
                activeProject.splitImages[1].outline ? 'outline' : ''
              } images-split__right`}
            >
              <video
                controls
                className="images-split__right"
                src={activeProject.splitImages[1].src}
                type="video/mp4"
              />
            </div>
          )}
        </div>
      )}

      {activeProject.additionalHero && (
        <div className="image-container">
          {/* <img
            src={activeProject.additionalHero}
            alt=""
            srcset="/files/16864/clock-demo-200px.png 1x, /files/16797/clock-demo-400px.png 2x" /> */}
          <img
            src={activeProject.additionalHero}
            className="additional-hero"
            alt=""
          />
        </div>
      )}

      {activeProject.video && (
        <div
          className={`${
            activeProject.videoLarge ? 'image-container--large' : ''
          } image-container`}
        >
          <video
            controls
            className="project__video"
            src={activeProject.video}
            type="video/mp4"
          />
        </div>
      )}
    </div>
  );
};

ProjectDetails.propTypes = {
  activeProject: PropTypes.shape().isRequired,
};

export default ProjectDetails;
