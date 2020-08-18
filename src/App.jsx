import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './App.css';

import Portrait from './components/about/Portrait';
import About from './components/about/About';
import ProjectDetails from './components/project-details/ProjectDetails';
import WorkTypeSelector from './components/project-listing/WorkTypeSelector';
import Teaching from './components/teaching/Teaching';
import ProjectListing from './components/project-listing/ProjectListing';

import projects from './data/projects';

function App() {
  const [projectCategory, setProjectCategory] = useState('personal');
  const [activeProject, setActiveProject] = useState(null);
  const [workTitle, setWorkTitle] = useState('Work');

  const projectListingElement = React.createRef();
  const projectTitle = React.createRef();

  const toggleWorkCategory = () => {
    if (projectCategory === 'client') {
      return setProjectCategory('personal');
    }

    return setProjectCategory('client');
  };

  return (
    <>
      <div className="curtain" />
      <Portrait />

      <div className="wrapper">
        <About />
        <Teaching />

        <section className="work">
          
          {/* ------------ */}
          {/* Work Heading */}
          {/* ------------ */}

          <div className="work__heading">
            
            <h2 ref={projectTitle}>{workTitle}</h2>
          
            <WorkTypeSelector
              activeProject={activeProject}
              setActiveProject={setActiveProject}
              projectCategory={projectCategory}
              toggleWorkCategory={toggleWorkCategory}
              setWorkTitle={setWorkTitle}
            />

          </div>

          {/* ------------------------ */}
          {/* Project Listing & Detail */}
          {/* ------------------------ */}
          
          <div className="projects">
            {!activeProject && (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={projectCategory}
                  classNames="slide"
                  timeout={{
                    enter: 200,
                    exit: 800
                  }}
                  nodeRef={projectListingElement}
                >
                  <ProjectListing
                    projectCategory={projectCategory}
                    setActiveProject={setActiveProject}
                    setWorkTitle={setWorkTitle}
                    ref={projectListingElement}
                  />
                </CSSTransition>
              </SwitchTransition>
            )}
            {activeProject && <ProjectDetails activeProject={activeProject} />}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
