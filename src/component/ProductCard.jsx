import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-slate-800 text-white border hover:border-blue-500 hover:scale-105 transform transition-transform duration-300 border-gray-700 rounded-lg shadow-lg p-4 mb-6">
      <img
        src={project.image || '/dp.jpg'}
        alt={project.title}
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-300">
          {project.title}{' '}
          <div className="mt-1">
            <span
              className={`inline-block px-2 py-1 rounded-md text-xs poppins-regular ${
                project.status === 'Completed'
                  ? 'bg-green-900 text-white'
                  : project.status === 'In Progress'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-500 text-gray-300'
              }`}
            >
              {project.status} | {project.date}
            </span>
          </div>
        </h3>

        <p className="text-gray-400 text-sm text-justify mt-1 hover:block ">{project.description}</p>

     
          <ul className="menu px-0 text-xs menu-horizontal gap-2  text-gray-500">
            {project.technologies.map((tech, index) => (
              <li
                className="uppercase border-b border-gray-400 text-gray-400 hover:text-gray-300 hover:border-gray-300 transition duration-200"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
      

        <div className="mt-1 flex gap-4 ">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-slate-900 font-bold rounded-sm text-sm border border-blue-400 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Demo
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-slate-900 font-bold rounded-sm text-sm border border-blue-400 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
