import React, { useState } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Skills />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className='text-gray-700'>
      <div className='flex flex-col min-h-screen justify-between'>
        <div>
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div>{renderPage()}</div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
