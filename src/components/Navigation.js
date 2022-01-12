import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className='flex justify-between items-center'>
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
        Chaitra
      </h1>
      <ul className='flex justify-between items-center space-x-7 text-gray-1000'>
        <li className='text-lg font-semibold'>
          <a
            href='#about'
            onClick={() => handlePageChange("About")}
            className='mr-5 hover:text-white'>
            About
          </a>
        </li>
        <li className='text-lg font-semibold'>
          <a
            href='#projects'
            className='mr-5 hover:text-white'
            onClick={() => handlePageChange("Projects")}>
            Projects
          </a>
        </li>
        <li className='text-lg font-semibold'>
          <a
            href='#skills'
            className='mr-5 hover:text-white'
            onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
        <li className='text-lg font-semibold'>
          <a
            href='#contact'
            className='mr-5 hover:text-white'
            onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
