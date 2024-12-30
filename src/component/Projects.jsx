import ProjectsCard from './ProjectsCard';
import { projects } from '../data.jsx';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Project creations' />
      <div className='py-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;