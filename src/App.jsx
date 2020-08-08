import React, { useState } from 'react';
import './App.css';

import projects from './projectsData';

import Portrait from './components/Portrait';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import ProjectSelection from './components/ProjectSelection';
import WorkTypeSelector from './components/WorkTypeSelector';
import Teaching from './components/Teaching';
import ProductListing from './components/ProjectListing';

function App() {
  const [projectCategory, setProjectCategory] = useState('personal');
  const [activeProject, setActiveProject] = useState({
    client: null,
    personal: null,
  });

  const toggleWorkCategory = () => {
    if (projectCategory === 'client') {
      return setProjectCategory('personal');
    }

    return setProjectCategory('client');
  };

  return (
    <>
      <Portrait />

      <div className="wrapper">
        <About />
        <Teaching />

        <section className="work">
          <div className="work__heading">
            <h2>Work</h2>
            <WorkTypeSelector
              projectCategory={projectCategory}
              toggleWorkCategory={toggleWorkCategory}
            />
          </div>
          <div className="projects">
            <ProductListing projectCategory={projectCategory} />
            {/* {activeProject.client ||
              (activeProject.personal && (
                <>
                  <ProjectDetails
                    activeProject={activeProject[projectCategory]}
                  />
                  <ProjectSelection
                    projectCategory={projectCategory}
                    projects={projects[projectCategory]}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                </>
              ))} */}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
