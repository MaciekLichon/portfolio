import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';

import { getAllProjects } from '../../../redux/projectsRedux';

const Projects = () => {

  const projects = useSelector(getAllProjects);

  return (
    <section className={styles.projects}>
      {projects.map(project => (
        <div className={styles.project_container}>
          <div className={styles.project_info}>
            <h3 className={styles.title}>{project.title}</h3>
            <h4 className={styles.technologies}>{project.technologies}</h4>
            <p className={styles.description}>{project.description}</p>
            <a href="" className={styles.Open_button}>Open</a>
          </div>
          <div className={styles.project_visuals}>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
