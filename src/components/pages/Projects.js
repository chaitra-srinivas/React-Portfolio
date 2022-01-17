import React from "react";
import projects from "../../data";

export default function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-col justify-center items-center'>
      <div className='px-5 py-10 lg:px-60'>
        <div className='text-center sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-400'>
          <h1>A sample of my work</h1>
        </div>
        <div className='flex flex-wrap'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 w-100 p-4'
              target={"_blank"} rel="noreferrer noopener">
              <div className='flex relative shadow-lg shadow-gray-100/50'>
                <img
                  alt='project gallery'
                  className='absolute inset-0  w-full h-full object-fill object-center  '
                  src={require(`${project.image}`)}
                />
                <div className='px-8 py-10 relative z-10 w-full bg-gray-900 opacity-0 hover:opacity-100 '>
                  <h2 className='title-font text-lg font-medium text-white mb-3'>
                    {project.title}
                  </h2>
                  <h1 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h1>
                  <a href={project.github} target={'_blank'} rel="noreferrer noopener"><img src={require("./logos/GitHub.png")} alt="gitHub logo"></img></a>
                  <p className='leading-relaxed text-white'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
