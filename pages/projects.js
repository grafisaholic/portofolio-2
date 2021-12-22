import Layout from '../components/layout'
import ProjectItem from '../components/landing/projects';

import { allProjects } from '../data/projects';

const title = "Projects";
const description = "A selection of projects I've worked on, during my career as a software developer."

const Projects = () => {
  return (
    <Layout title={title} description={description}>
      <div className="md:space-y-3 divide-y p-3">
      <div className="pb-4 space-y-2 space-y-3">
          <h1 className="text-3xl tracking-tight font-medium dark:text-cool-gray-100">{title}</h1>
          <p className="font-mono dark:text-cool-gray-400">{description}</p>
        </div>

        <div></div>
        <div className="grid grid-cols-1 border-none pt-5">
          {allProjects.map(project => (
            <ProjectItem 
              key={project.title}
              title={project.title}
              link={project.link}
              description={project.desc}
              technology={project.technologies}
              cover={project.cover}
            />
          ))}
        </div>

      </div>
    </Layout>
  )
};

export default Projects;