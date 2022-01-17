import React from "react";
import projects from "../../data";

const styles ={
  imgStyle:{
    maxheight: "300px",
    maxwidth: "375px", 
    
  }
}


export default function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-col justify-center items-center'>
      <div className='px-5 py-10 lg:px-60'>
        <div className='text-center sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
          <h1>Some of my work</h1>
        </div>
        <div className='flex flex-wrap'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 w-100 p-4'>
              <div className='flex relative shadow-lg shadow-gray-100/50'>
                <img
                  alt='gallery'
                  style={styles.imgStyle}
                  className='absolute inset-0  w-full h-full object-fill object-center  '
                  src={require(`${project.image}`)}
                />
                <div className='px-8 py-10 relative z-10 w-full bg-gray-900 opacity-0 hover:opacity-100 '>
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
