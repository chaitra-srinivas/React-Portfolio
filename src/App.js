import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';


import './App.css';

function App() {
  return (
    <main className="bg-gray-100 rounded-xl p-8 dark:bg-gray-800">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {/* <Header />
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </main>
  );
}

export default App;
