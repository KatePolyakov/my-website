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
        <div className={classes.skills__group}>
          <button>
            <Icon icon="html5" size={45} />
          </button>
          <button>
            <Icon icon="csswizardry" size={45} />
          </button>
          <button>
            <Icon icon="sass" size={45} />
          </button>
          <button>
            <Icon icon="javascript" size={45} />
          </button>
          <button>
            <Icon icon="react" size={45} />
          </button>
          <button>
            <Icon icon="typescript" size={45} />
          </button>
          <button>
            <Icon icon="mongodb" size={45} />
          </button>
          <button>
            <Icon icon="mysql" size={45} />
          </button>
          <button>
            <Icon icon="node-dot-js" size={45} />
          </button>
          <button>
            <Icon icon="bootstrap" size={45} />
          </button>
          <button>
            <Icon icon="figma" size={45} />
          </button>
          <button>
            <Icon icon="icomoon" size={45} />
          </button>
          <button>
            <Icon icon="auth0" size={45} />
          </button>
          <button>
            <Icon icon="github1" size={45} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
