import React from 'react';
import PropTypes from 'prop-types';

import styles from './WorkTypeSelector.module.css';

const WorkTypeSelector = ({ projectCategory, toggleWorkCategory }) => {
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
};

WorkTypeSelector.propTypes = {
  projectCategory: PropTypes.string.isRequired,
  toggleWorkCategory: PropTypes.func.isRequired,
};

export default WorkTypeSelector;
