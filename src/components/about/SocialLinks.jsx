import React from 'react';

import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <a
        href="https://codepen.io/MarioD"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__item}
      >
        CodePen
      </a>
      <a
        href="https://twitter.com/mariod"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__item}
      >
        Twitter
      </a>
      <a
        href="https://github.com/MariuszDabrowski"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__item}
      >
        GitHub
      </a>
      <a
        href="https://www.youtube.com/user/EthicsD/videos"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__item}
      >
        YouTube
      </a>
      <a
        href="https://www.linkedin.com/in/mariuszpdabrowski/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__item}
      >
        LinkedIn
      </a>
      <a
        href="https://500px.com/intomacro"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__item}
      >
        500px
      </a>
    </div>
  );
};

export default SocialLinks;
