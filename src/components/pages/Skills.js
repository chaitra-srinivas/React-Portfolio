import React from "react";
export default function Skills() {
  return (
    <section id='skills'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col justify-center items-center text-gray-300'>
        <h1>Skills Page</h1>
        <h2><a href= {require("./docs/ChaitraSrinivasamurthy.pdf")} target={'_blank'} rel="noreferrer noopener">Resume</a></h2>
        </div>
        <div className="mx-auto flex md:flex-row flex-col justify-center items-center text-gray-300">
        <ul className="text-gray-300 mx-auto  px-10 py-20  ">
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>React</li>
        </ul>
      </div>
    </section>
  );
}
