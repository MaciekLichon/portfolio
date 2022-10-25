import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';

import { getAllProjects } from '../../../redux/projectsRedux';
import Project from '../../features/Project/Project';

const Projects = () => {

  const projects = useSelector(getAllProjects);

  return (
    <section className={styles.projects}>
      {projects.map(project => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          technologies={project.technologies}
          description={project.description}
          foregroundOne={project.foregroundOne}
          mainImage={project.mainImage}
          gitLink={project.gitLink}
        />
      ))}
    </section>
  );
};

export default Projects;
