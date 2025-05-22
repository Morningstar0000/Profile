import ProjectsCard from './ProjectsCard';
import { projects } from '../data.jsx';
import SectionTitle from './SectionTitle';
import {useState} from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Project creations' />
        {/* Filter Buttons */}
        <div className='flex justify-center gap-4 my-6'>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'all' ? 'bg-emerald-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'major' ? 'bg-emerald-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilter('major')}
        >
          Major Projects
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'minor' ? 'bg-emerald-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleFilter('minor')}
        >
          Minor Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className='py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredProjects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;