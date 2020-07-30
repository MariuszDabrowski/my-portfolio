import React, { useState } from 'react';
import './App.css';

import projects from './projects';

import Portrait from './components/Portrait';
import ProjectDetails from './components/ProjectDetails';
import ProjectSelection from './components/ProjectSelection';
import WorkTypeSelector from './components/WorkTypeSelector';
import SocialLinks from './components/SocialLinks';
import Info from './components/Info';

function App() {

  const [projectCategory, setProjectCategory] = useState('personal');
  const [activeProject, setActiveProject] = useState({
    client: projects.client[0],
    personal: projects.personal[0]
  });

  const toggleWorkCategory = (category) => {
    setProjectCategory(category);
  };

  return (
    <>
      <header>
        <Portrait />
      </header>
      <div className="wrapper">
        <div className="about">
          <div className="about__bio">
            <h2>About</h2>
            <p>I'm a designer of four years turned developer with a passion for UI, animation, and clean code. I'm currently working freelance but open to new opportunities.</p>
            <a href="#" className="resume-button">My resume</a>
          </div>
          <div className="about__details">
            <Info />
            <SocialLinks />
          </div>
        </div>
        <div className="work">
          <div className="work__heading">
            <h2>Work</h2>
            <WorkTypeSelector projectCategory={projectCategory} toggleWorkCategory={toggleWorkCategory} />
          </div>
          <div className="projects">
            <ProjectDetails activeProject={activeProject[projectCategory]} />
            <ProjectSelection
              projectCategory={projectCategory}
              projects={projects[projectCategory]}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
