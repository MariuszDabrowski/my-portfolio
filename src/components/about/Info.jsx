import React from 'react';

import styles from './Info.module.css';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <div className={styles.info__item__title}>Role</div>
        <div className={styles.info__item__description}>Developer</div>
      </div>
      <div className={styles.info__item}>
        <div className={styles.info__item__title}>Location</div>
        <div className={styles.info__item__description}>Toronto, Ontario</div>
      </div>
      <div className={styles.info__item}>
        <div className={styles.info__item__title}>Current Position</div>
        <div className={styles.info__item__description}>Freelance</div>
      </div>
    </div>
  );
};

export default Info;
