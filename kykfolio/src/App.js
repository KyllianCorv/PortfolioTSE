import React, { useState, startTransition } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import ContactMe from './components/ContactMe';
// import Blog from './components/Blog';
import Projects from './components/Projects'; // Import du composant Projects

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;

    startTransition(() => {
      setInputValue(newValue);
    });
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="portfolio">Portfolio</div>
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/" element={
              <section className="home">
                <div className="text-section">
                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.5 } }
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      Kyllian
                    </motion.span>
                    <br />
                    <motion.span
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    >
                      Corvaisier
                    </motion.span>
                  </motion.h1>
                  <br /><br /><br /><br />
                  <p>
                    Bienvenue sur mon portfolio. Découvrez mes projets et mon parcours.
                  </p>
                  <p>
                    Jurassien passionné par l'informatique et actuellement étudiant en FISE 1 à Télécom Saint-Étienne, après avoir complété un BTS SIO à Rive-de-Gier. J'adore le développement web et logiciel, je m'investis dans divers projets techniques pour approfondir mes compétences. Ma passion pour les nouvelles technologies me pousse à explorer constamment de nouveaux langages et méthodes de programmation.
                  </p>
                </div>
                <div className="shape">
                  <div className="shape2"></div>
                </div>
              </section>
            } />
          </Routes>
        </main>

        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </Router>
  );
}

export default App;
