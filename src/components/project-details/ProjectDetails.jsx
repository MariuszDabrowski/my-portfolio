import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Flickity from 'flickity';

import '../../flickity.min.css';
import styles from './ProjectDetails.module.css';
import arrowRight from '../../img/icon-arrow-right.svg';

const ProjectDetails = ({ activeProject }) => {
  const carousel = React.createRef();
  const carouselButton = React.createRef();

  useEffect(() => {
    const flkty = new Flickity(carousel.current, {
      imagesLoaded: true,
      prevNextButtons: false,
      wrapAround: true,
      resize: true,
      setGallerySize: false
    });

    if (carouselButton.current) {
      carouselButton.current.addEventListener('click', () => {
        flkty.next();
      });
    }

    window.addEventListener( 'load', () => {
      flkty.resize();
    });
  }, [carousel, carouselButton]);
  
  return (
    <div className={styles['project-details']}>

      {/* --------- */}
      {/* Left Half */}
      {/* --------- */}

      <div className={styles['project-details__half']}>
        {activeProject.projectLink && (
          <a
            href={activeProject.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-1"
          >
            View Project
          </a>
        )}
        
        {activeProject.processLink && (
          <a
            href={activeProject.processLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-1"
          >
            Process Writeup
          </a>
        )}
        
        {activeProject.githubLink && (
          <a
            href={activeProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-1"
          >
            Github
          </a>
        )}

        <div className={styles.description} dangerouslySetInnerHTML={{ __html: activeProject.description }} />

        <div className={styles.goals}>
          <h3>Achievements</h3>
          <ul className={styles.list}>
            {activeProject.achievements.map((achievement) => <li key={`achievement-${achievement}`} className={styles.list__item}><p>{achievement}</p></li>)}
          </ul>
        </div>

        <div className={styles['tech-role']}>
          <div className={styles['tech-role__item']}>
            <h3>Technologies</h3>
            <div className={styles['tech-role__list']}>
              {activeProject.tags.map((tag) => <div key={`tags-${tag}`} className={styles['tech-role__list__item']}>{tag}</div>)}
            </div>
          </div>
          <div className={styles['tech-role__item']}>
            <h3>Role</h3>
            <p className={styles['tech-role__description']}>{activeProject.role}</p>
          </div>
        </div>

      </div>

      {/* ---------- */}
      {/* Right Half */}
      {/* ---------- */}

      <div className={styles['project-details__half']}>

        {/* Gallery */}
        <div className={styles['slider-wrapper']}>
          {activeProject.media.length > 1 && (
            <button className={styles.slider__next} type="button" ref={carouselButton}>
              <img src={arrowRight} alt="" />
            </button>
          )}
          <div className={styles.slider} ref={carousel}>
            {activeProject.media.map((media) => {
              if (media.type === 'image') {
                return (
                  <div key={`media-${media.id}-${media.src}`} className={styles.slider__item}>
                    <img srcSet={`${media.src} 1x, ${media.src_2x} 2x`} src={media.src} alt="" />
                  </div>
                );
              }
              
              return (
                <div key={`media-${media.id}-${media.src}`} className={styles.slider__item}>
                  <iframe title={media.title} src={media.src} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Images */}
        <div className={styles['additional-images']}>
          {activeProject.additionalImages.map((image) => {
            return (
              <div key={`image-${image.src}`} className={styles['additional-images__item']}>
                <img srcSet={`${image.src} 1x, ${image.src_2x} 2x`} src={image.src} alt="" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

ProjectDetails.defaultProps = {
  activeProject: null,
};

ProjectDetails.propTypes = {
  activeProject: PropTypes.shape(),
};

export default ProjectDetails;
