import { useSelector } from 'react-redux';

import { getAllProjects } from '../../../redux/projectsRedux';
import Project from '../../features/Project/Project';

const Projects = () => {

  const projects = useSelector(getAllProjects);

  return (
    <section>
      {projects.map(project => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          technologies={project.technologies}
          description={project.description}
          foregroundOne={project.foregroundOne}
          mainImage={project.mainImage}
          appLink = {project.appLink}
          gitLink={project.gitLink}
        />
      ))}
    </section>
  );
};

export default Projects;
