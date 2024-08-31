// src/App.js
import React from 'react';
import '../css/Projects.css';

const projects = [
  {
    image: '/WB.png',
    title: 'Willy Blanc',
    description: "J'ai développé un site pour présenter un élevage familial de poulets de Bresse en utilisant React et Three.js (R3F). Le site permet de visiter la ferme en 3D et de voir comment les poulets sont élevés.",
    languages: 'React, Three.js (R3F)',
  },
  {
    image: '/ArtGallery.png',
    title: 'Gallery d\'art',
    description: "J'ai créé un site pour présenter une galerie d'art en utilisant React et Three.js (R3F). Le site permet de visiter la galerie en 3D et d'explorer les œuvres exposées.",
    languages: 'React, Three.js (R3F)',
  },
  {
    image: '/S2S.PNG',
    title: 'Copie du site S2 Vichy',
    description: "Ce projet est une copie du site de S2 Vichy, cela m’a permis de valider mes compétences dans ces langages. Ce site a été réalisé durant mon temps libre et n’est pas présent en ligne pour des raisons juridiques.",
    languages: 'HTML, CSS, JavaScript',
  },
  // Ajoutez plus de projets ici
];

const ProjectCard = ({ image, title, description, languages }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Langages utilisés:</strong> {languages}</p>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            languages={project.languages}
          />
        ))}
        
      </div>
      <a href="https://o2o.to/i/3EhIj4" target="_blank" rel="noopener noreferrer">
        <button className="project-button">Voir tous les projets</button>
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      {/* <h1>Mes Projets</h1> */}
      <div className="content-wrapper">
        <ProjectList />
      </div>
      
    </div>
  );
};

export default App;
