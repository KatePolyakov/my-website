import classes from './Projects.module.scss';

const ProjectsPage = () => {
  return (
    <div className={classes.projects__wrapper}>
      <div className={classes.projects__inner}>
        <hr className={classes.project__breakLine} />
        <h1>Project Page</h1>
      </div>
    </div>
  );
};

export default ProjectsPage;
