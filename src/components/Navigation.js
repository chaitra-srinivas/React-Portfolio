import React from "react";
import background from "./pages/images/geo.png";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <header className='bg-gray-900 md:sticky top-0 z-10'  style={{
      backgroundImage: `url(${background})`,
    }} >
      <nav className='flex justify-between mx-auto p-5 flex-col md:flex-row items-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700'>
          Chaitra
        </h1>
        <ul className='flex justify-between items-center space-x-7 text-gray-500'>
          <li className='text-lg font-semibold'>
            <a
              href='#about'
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("About");
              }}
              className='mr-5 hover:text-white'>
              About
            </a>
          </li>
          <li className='text-lg font-semibold'>
            <a
              href='#projects'
              className='mr-5 hover:text-white'
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("Projects");
              }}>
              Projects
            </a>
          </li>
          <li className='text-lg font-semibold'>
            <a
              href='#skills'
              className='mr-5 hover:text-white'
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("Resume");
              }}>
              Resume
            </a>
          </li>
          <li className='text-lg font-semibold'>
            <a
              href='#contact'
              className='mr-5 hover:text-white'
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("Contact");
              }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
