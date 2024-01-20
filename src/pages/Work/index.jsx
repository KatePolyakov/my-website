import React from 'react';

import Icon from '../../icons/icon';

import classes from './Work.module.scss';

const WorkPage = () => {
  return (
    <div className={classes.work__wrapper}>
      <div className={classes.work__inner}>
        <h2>
          <Icon icon="suitcase" size={35} color="#6EA3AB" />
          Work
        </h2>
        <div className={classes.work__main}>
          <h4>
            Frontend Developer <span>•</span> JobAutopilot.com, Canada
          </h4>
          <p>
            <Icon icon="calendar" size={20} color="#6EA3AB" />
            <span>11/2022 - present - Full-time</span>
          </p>
          <p>
            Creating web applications <br />
            Skills: TypeScript · auth0 · SASS · Gitlab · HTML · React.js
          </p>
          <hr />
          <h4>
            Email Developer, QA <span>•</span> Urban Real Estate Group, Canada
          </h4>
          <p>
            <Icon icon="calendar" size={20} color="#6EA3AB" />
            <span>
              05/2022 - 07/2023 - Email Developer Part-time <br />
              05/2022 - 11/2022 - QA Full-time
            </span>
          </p>
          <p>Skills: MailChimp · Adobe Creative Suite · HTML · CSS</p>
          <hr />
          <h4>
            Junior Web Developer <span>•</span> QE Home | Quilts Etc, Canada
          </h4>
          <p>
            <Icon icon="calendar" size={20} color="#6EA3AB" />
            <span>07/2021 - 09/2021 - Contract Full-time</span>
          </p>
          <p>Skills: Adobe XD · BigCommerce · HTML · CSS · JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
