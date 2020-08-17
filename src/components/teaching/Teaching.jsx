import React from 'react';

import styles from './Teaching.module.css';
import teachingData from '../../data/teaching';

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
              <div
                className={styles.hover}
                style={{
                  background: `linear-gradient(rgba(255,255,255, 0.2), rgba(0,0,0, 0.2)), ${item.hoverColor}`,
                }}
              />
              <img srcSet={`${item.image} 1x, ${item.image2x} 2x`} src={item.image} alt="" />
            </a>
          );
        })}
      </div>
    </section>
  );
});

export default Teaching;
