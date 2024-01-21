import React from 'react';

import AboutPage from './pages/About';
import EducationPage from './pages/Education';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import WorkPage from './pages/Work';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.app__wrapper}>
        <div className={classes.wrapper__top}>
          <AboutPage />
          <div className={classes.top__right}>
            <EducationPage />
            <WorkPage />
          </div>
        </div>
        <div className={classes.wrapper__bottom}>
          <SkillsPage />
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
