import React from "react";
import '../styles/Skills.css';


export default function Skills() {
  return (
    <section id='skills' className='container mx-auto flex' >
    
      <div className='mx-auto flex md:flex-row flex-col justify-center items-center text-gray-300 lg:w-1/4'>
        <ul className='text-gray-300 mx-auto px-2 py-10'>
          <li>
            <h2 > Front-end technologies </h2>
          </li>
          <br />
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Handlebars</li>
          <br />
          <li>
            <h2> Back-end technologies </h2>
          </li>
          <br />
          <li>MySQL</li>
          <li>Express</li>
          <li>Node</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className='mx-auto flex px-2 py-10 md:flex-row flex-col justify-center text-gray-300 '>
        <a
          href={require("./docs/ChaitraSrinivasamurthy.pdf")}
          target={"_blank"}
          rel='noreferrer noopener'
         >
          <h2 className="mr-5 hover:text-pink">My downloadable Resume</h2>
        </a>
      </div>
      
    </section>
  );
}
