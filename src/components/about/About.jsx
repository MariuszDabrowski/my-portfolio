import React from 'react';

import SocialLinks from './SocialLinks';
import Info from './Info';

import styles from './About.module.css';

const About = React.memo(() => {
  return (
    <section className={styles.about}>
      <div className={styles.about__bio}>
        <h2>About</h2>
        <p>
          I’m a Toronto-based developer who started out my career as a designer.
          I have a passion for UX, animation, and clean code. In my spare time I
          love to experiment with web animations, take wildlife macro photos,
          and share my knowledge of code with others.
        </p>
        <a
          href="mailto:hello@mariuszdabrowski.com"
          className="button-1"
        >
          Contact Me
        </a>
        <a
          href="/resume-mariusz-dabrowski.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button-1"
        >
          My Resume
        </a>
      </div>
      <div className={styles.about__details}>
        <Info />
        <SocialLinks />
      </div>
    </section>
  );
});

export default About;
