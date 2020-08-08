import React from 'react';

import styles from './Teaching.module.css';
import teachingData from '../teachingData';

const Teaching = React.memo(() => {
  return (
    <section className={styles.teaching}>
      <h2>Teaching</h2>
      <div className={styles.links}>
        {teachingData.map((item) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.links__item}`}
              key={`video-${item.title}`}
            >
              <span
                className={styles.hover}
                style={{ backgroundColor: item.hoverColor }}
              >
                <span className={styles.hover__title}>{item.title}</span>
                <span className={styles.hover__time}>{item.time}</span>
              </span>
              <img src={item.image} alt="" />
            </a>
          );
        })}
      </div>
    </section>
  );
});

export default Teaching;
