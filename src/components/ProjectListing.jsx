import React from 'react';
import PropTypes from 'prop-types';

import Projects from '../projectsData';
import styles from './ProjectListing.module.css';

const ProjectListing = ({ projectCategory }) => {
  return (
    <div className={styles.projects}>
      {Projects[projectCategory].map((item) => {
        return (
          <div
            className={styles.projects__item}
            key={`project-${item.company}`}
          >
            <div
              className={styles.hover}
              style={{ backgroundColor: item.hoverColor }}
            >
              <div className={styles.hover__title}>{item.company}</div>
              <div className={styles['hover__sub-title']}>
                {item.projectTitle}
              </div>
              <div className={styles.tags}>
                <div className={styles.tags__item}>React</div>
                <div className={styles.tags__item}>API Design</div>
                <div className={styles.tags__item}>UI</div>
              </div>
            </div>
            <div className={styles.hero}>
              <img src={item.hero} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

ProjectListing.propTypes = {
  projectCategory: PropTypes.string.isRequired,
};

export default ProjectListing;
