import React from 'react';

import Logo from '../../img/mainLogo.png';
import Icon from '../../icons/icon';

import classes from './About.module.scss';

const AboutPage = () => {
  return (
    <>
      <div className={classes.about__wrapper}>
        <img src={Logo} alt="Kate Polyakov Logo" />
        <div className={classes.education__modal}>
          <div className={classes.modalEdu__inner}>
            <Icon icon="graduation" size={35} color="#E7874D" />
          </div>
        </div>
        <div className={classes.works__modal}>
          <div className={classes.modalWrk__inner}>
            <Icon icon="suitcase" size={35} color="#6EA3AB" />
          </div>
        </div>
        <div className={classes.about__inner}>
          <h2>Kate Polyakov</h2>

          <p>
            <Icon icon="user" size={20} color="#6EA3AB" />
            Web Developer <span>•</span> Frontend Developer
          </p>
          <p>
            <Icon icon="home1" size={20} color="#6EA3AB" />
            Greater Vancouver Area <span>•</span> BC <span>•</span> Canada
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
