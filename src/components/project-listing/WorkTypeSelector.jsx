import React from 'react';
import PropTypes from 'prop-types';

import styles from './WorkTypeSelector.module.css';

const WorkTypeSelector = ({
  projectCategory,
  toggleWorkCategory,
  activeProject,
  setActiveProject,
  setWorkTitle
}) => {
  const curtain = document.querySelector('.curtain');

  const toggleProject = () => {
    setWorkTitle('Work');
    setActiveProject(null);
    setTimeout(() => {
      curtain.classList.remove('curtain--active');
      curtain.removeEventListener('transitionend', toggleProject);
    }, 500);
  };

  if (!activeProject) {
    return (
      <button
        type="button"
        className={`${styles.toggle} ${styles[`toggle--${projectCategory}`]}`}
        onClick={toggleWorkCategory}
      >
        <div className={styles.toggle__option}>Personal</div>
        <div className={styles.toggle__option}>Client</div>
        <div className={styles.toggle__active}>
          <div className={styles['active-text']}>
            <div className={styles['active-text__item']}>Personal</div>
            <div className={styles['active-text__item']}>Client</div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      className={styles.close}
      type="button"
      onClick={() => {
        curtain.classList.add('curtain--active');
        curtain.classList.add('curtain--up');
        
        curtain.addEventListener('transitionend', toggleProject);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 364.6 364.6"
        style={{ enableBackground: 'new 0 0 364.6 364.6' }}
        xmlSpace="preserve"
      >
        <path d="M258,182.3L350,90.2c19.4-19.4,19.4-51.3,0-70.7l-4.9-4.9c-19.4-19.4-51.3-19.4-70.7,0l-92.1,92.1L90.2,14.6 C70.8-4.9,39-4.9,19.5,14.6l-4.9,4.9C-4.9,39-4.9,70.8,14.6,90.2l92.1,92.1l-92.1,92.1c-19.4,19.4-19.4,51.3,0,70.7l4.9,4.9 c19.4,19.4,51.3,19.4,70.7,0l92.1-92.1l92.1,92.1c19.4,19.4,51.3,19.4,70.7,0l4.9-4.9c19.4-19.4,19.4-51.3,0-70.7L258,182.3z" />
      </svg>
    </button>
  );
};

WorkTypeSelector.defaultProps = {
  activeProject: null
};

WorkTypeSelector.propTypes = {
  projectCategory: PropTypes.string.isRequired,
  toggleWorkCategory: PropTypes.func.isRequired,
  setWorkTitle: PropTypes.func.isRequired,
  activeProject: PropTypes.shape(),
  setActiveProject: PropTypes.func.isRequired

};

export default WorkTypeSelector;
