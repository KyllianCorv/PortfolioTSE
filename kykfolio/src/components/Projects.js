// src/App.js
import React from 'react';
import '../css/Projects.css';

const projects = [
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 1',
    description: 'Description du projet 1',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 2',
    description: 'Description du projet 2',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 3',
    description: 'Description du projet 3',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 1',
    description: 'Description du projet 1',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 2',
    description: 'Description du projet 2',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 3',
    description: 'Description du projet 3',
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Projet 1',
    description: 'Description du projet 1',
  },
  
  
  // Ajoutez plus de projets ici
];

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1>Mes Projets</h1>
      <div className="content-wrapper">
        <ProjectList />
      </div>
    </div>
  );
};

export default App;
