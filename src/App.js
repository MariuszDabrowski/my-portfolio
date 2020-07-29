import React, { useState } from 'react';
import './App.css';

import Portrait from './components/Portrait';
import ProjectDetails from './components/ProjectDetails';
import ProjectSelection from './components/ProjectSelection';
import WorkTypeSelector from './components/WorkTypeSelector';
import SocialLinks from './components/SocialLinks';
import Info from './components/Info';

import placeholder from './img/placeholder-img.png';

function App() {

  const projects = {
    client: [
      {
        id: 0,
        company: 'Honda',
        projectTitle: 'Motorcycles redesign',
        year: 2014,
        description: 'Something about the motorcycles project...',
        hero: placeholder
      },
      {
        id: 1,
        company: 'Honda',
        projectTitle: 'Honda.ca redesign',
        year: 2015,
        description: 'Something about the Honda.ca redesign project...',
        hero: placeholder
      },
      {
        id: 2,
        company: 'Nerdblock',
        projectTitle: 'Redesign',
        year: 2015,
        description: 'Something about the Nerdblock redesign project...',
        hero: placeholder
      }
    ],
    personal: [
      {
        id: 0,
        company: 'Gone Fishin\'',
        projectTitle: 'JS fishing game',
        year: 2014,
        description: 'Something about the motorcycles project...',
        hero: placeholder
      },
      {
        id: 1,
        company: 'Hot n\' Sticky',
        projectTitle: 'Unlikely pals',
        year: 2015,
        description: 'Something about the Honda.ca redesign project...',
        hero: placeholder
      },
      {
        id: 2,
        company: 'Around The World',
        projectTitle: 'Bodymovin\' experiment',
        year: 2015,
        description: 'Something about the Nerdblock redesign project...',
        hero: placeholder
      }
    ]
  }

  const [projectCategory, setProjectCategory] = useState('client');
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
