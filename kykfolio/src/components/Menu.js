import React from 'react';
import { Link } from 'react-router-dom';  // Import du composant Link
import '../css/Menu.css';
import ThreeScene from './ThreeScene';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Menu({ isOpen, toggleMenu }) {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-left">
        <div className="red-square">
          <ThreeScene />
        </div>
      </div>
      <div className="menu-right">
        <div className="menu-right2">
          <div className="close-btn" onClick={toggleMenu}>&times;</div>
          <ul>
            <h1>Menu</h1>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li> {/* Utilisation de Link pour la navigation */}
            <li><Link to="/projects" onClick={toggleMenu}>Projets</Link></li> {/* Modifié de #Projets à /projects */}
            <li><Link to="/ContactMe" onClick={toggleMenu}>Contact Me</Link></li> {/* Modifié de #Projets à /projects */}
            <li>
              <div className="icon-links">
                <a href="https://github.com/KyllianCorv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="tel:+0768497932" aria-label="Telephone">
                  <i className="fas fa-phone-alt"></i>
                </a> */}
              </div>
              
              
            </li>
          </ul>
          
          <div className="menu-footer">
            <p>
              © 2024 Kyllian Corvaisier. All rights reserved 
              {/* <Link to="/blog" onClick={toggleMenu} >
                <i class="fa-solid fa-gears" style={{ marginLeft: '20px', color: 'black' }}></i>
              </Link> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
