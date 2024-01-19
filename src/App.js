import React from 'react';

import AboutPage from './pages/About';
import EducationPage from './pages/Education';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import WorkPage from './pages/Work';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app__wrapper}>
      <div className={classes.wrapper__left}>
        <AboutPage />
        <SkillsPage />
      </div>
      <div className={classes.wrapper__right}>
        <div className={classes.right__top}>
          <div className={classes.right__top__left}>
            <EducationPage />
          </div>
          <div className={classes.right__top__right}>
            <WorkPage />
          </div>
        </div>
        <div className={classes.right__bottom}>
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
