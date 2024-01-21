import React from 'react';

import Icon from '../../icons/icon';

import classes from './Education.module.scss';

const EducationPage = () => {
  return (
    <>
      <div className={classes.education__wrapper}>
        <div className={classes.education__inner}>
          <h2>
            <Icon icon="graduation" size={35} color="#E7874D" />
            Education
          </h2>
          <div className={classes.education__main}>
            <h4>Tomsk State University, Russia</h4>
            <p>
              <Icon icon="calendar" size={20} color="#E7874D" />
              <span>2021 - 2025</span>
            </p>
            <p>Candidate of Bachelor Degree in Computer Software Engineering</p>
            <hr />
            <h4>Emily Carr University of Art and Design, Canada</h4>
            <p>
              <Icon icon="calendar" size={20} color="#E7874D" />
              <span>2021 - 2021</span>
            </p>
            <p>Non-degree in Web Design and Web Developing</p>
            <hr />
            <h4>Kemerovo State University (DIPLOMA with Honor), Russia</h4>
            <p>
              <Icon icon="calendar" size={20} color="#E7874D" />
              <span>2003 - 2008</span>
            </p>
            <p>Masters Degree in Economics (Statistics and Accounting)</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default EducationPage;
