import React from 'react';

import Icon from '../../icons/icon';

import classes from './Skills.module.scss';

const SkillsPage = () => {
  return (
    <div className={classes.skills__wrapper}>
      <div className={classes.skills__inner}>
        <h2>
          <Icon icon="cogs" size={30} color="#6EA3AB" />
          Skills
        </h2>
        
      </div>
    </div>
  );
};

export default SkillsPage;
