import React from 'react';
import PropTypes from 'prop-types';

import Projects from '../../data/projects';
import styles from './ProjectListing.module.css';

const ProjectListing = React.forwardRef(
  ({ projectCategory, setActiveProject, setWorkTitle }, ref) => {
    const toggleCurtain = (project) => {
      const curtain = document.querySelector('.curtain');

      if (curtain.classList.contains('curtain--up')) curtain.classList.remove('curtain--up');
      curtain.classList.add('curtain--active');
      
      const toggleProject = () => {
        setWorkTitle(project.company);
        setActiveProject(project);
        setTimeout(() => {
          if (curtain.classList.contains('curtain--active')) curtain.classList.remove('curtain--active');
          curtain.removeEventListener('transitionend', toggleProject);
        }, 500);
      };

      curtain.addEventListener('transitionend', toggleProject);
    };
    
    return (
      <div className={styles.projects} ref={ref}>
        {Projects[projectCategory].map((project) => {
          return (
            <button
              className={`${styles.projects__item} slide-animation ${projectCategory === 'client' ? 'slide-animation--left' : 'slide-animation--right'}`}
              key={`project-${project.company}`}
              onClick={() => toggleCurtain(project)}
              type="button"
            >
              <span
                className={styles.hover}
                style={{ backgroundColor: project.hoverColor }}
              >
                <span className={styles.hover__title}>{project.company}</span>
                <span className={styles['hover__sub-title']}>
                  {project.projectTitle}
                </span>
                <span className={styles.tags}>
                  {project.tags.map((tag) => <span key={`tag-${tag}`} className={styles.tags__item}>{tag}</span>)}
                </span>
              </span>
              <span className={styles.hero}>
                <img srcSet={`${project.hero.src} 1x, ${project.hero.src_2x} 2x`} src={project.hero.src} alt="" />
              </span>
            </button>
          );
        })}
      </div>
    );
  }
);

ProjectListing.propTypes = {
  projectCategory: PropTypes.string.isRequired,
  setActiveProject: PropTypes.func.isRequired,
  setWorkTitle: PropTypes.func.isRequired
};

export default ProjectListing;
