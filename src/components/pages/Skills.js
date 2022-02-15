import React from "react";
import "../styles/Skills.css";

const frontEndSkills = [
  { name: "HTML5" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Handlebars" },
  { name: "Bootstrap" },
  { name: "Semantic UI" },
];

const backEndSkills = [
  { name: "MySQL" },
  { name: "Express-js" },
  { name: "Nodejs" },
  { name: "MongoDB" },
  { name: "GraphQL" },
  { name: "Sequelize" },
  { name: "Mongoose" },
];

export default function Skills() {
  return (
    <section id='skills' className='container mx-auto flex'>
      <div className='mx-auto flex md:flex-row flex-col justify-center items-center text-gray-300 lg:w-1/4'>
        <ul className='text-gray-300 mx-auto px-2 py-10'>
          <li>
            <h2> Front-end technologies </h2>
          </li>
          <br />
          {frontEndSkills.map((f) => (
            <li key={f.name}>{f.name}</li>
          ))}
          <br />
          <li>
            <h2> Back-end technologies </h2>
          </li>
          <br />
          {backEndSkills.map((b) => (
            <li key={b.name}>{b.name}</li>
          ))}
        </ul>
      </div>
      <div className='mx-auto flex px-2 py-10 md:flex-row flex-col justify-center text-gray-300 '>
        <a
          href={require("./docs/ChaitraSrinivasamurthy.pdf")}
          target={"_blank"}
          rel='noreferrer noopener'>
          <h2 className='mr-5 '>My downloadable resume</h2>
        </a>
      </div>
    </section>
  );
}
