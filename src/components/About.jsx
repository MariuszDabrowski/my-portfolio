import React from 'react';

import SocialLinks from './SocialLinks';
import Info from './Info';

const About = React.memo(() => {
  return (
    <section className="about">
      <div className="about__bio">
        <h2>About</h2>
        <p>
          I&apos;m a designer of four years turned developer with a passion for
          UI, animation, and clean code. I&apos;m currently working freelance
          but open to new opportunities.
        </p>
        <a href="http://google.com" className="resume-button">
          My resume
        </a>
      </div>
      <div className="about__details">
        <Info />
        <SocialLinks />
      </div>
    </section>
  );
});

export default About;
