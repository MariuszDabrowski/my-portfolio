import React from 'react';
import './App.css';

import Portrait from './components/Portrait';
import ProjectDetails from './components/ProjectDetails';
import ProjectSelection from './components/ProjectSelection';
import WorkTypeSelector from './components/WorkTypeSelector';
import SocialLinks from './components/SocialLinks';
import Info from './components/Info';

function App() {
  return (
    <>
      <header>
        <Portrait />
      </header>
      <div className="wrapper">
        <div className="about">
          <div className="about__bio">
            <h2>About</h2>
            <p>23 Years ago, I started a long journey called life. The first scene started off on the tiny Caribbean island of Saint Lucia. I always relished the thought of being somewhere bigger, but who knew that very thought would push me to make one of the best decisions of my life thus far.  the best decisions of my life thus far.</p>
          </div>
          <div className="about__details">
            <Info />
            <SocialLinks />
          </div>
        </div>
        <div className="work">
          <div className="work__heading">
            <h2>Work</h2>
            <WorkTypeSelector />
          </div>
          <div className="projects">
            <ProjectDetails />
            <ProjectSelection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
