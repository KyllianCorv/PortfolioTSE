import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '../css/ContactMe.css';

const ContactMe = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [disableUntil, setDisableUntil] = useState(null);

  useEffect(() => {
    // Vérifier si le bouton doit être désactivé en fonction du temps actuel et de la dernière soumission
    const savedDisableUntil = localStorage.getItem('disableUntil');
    if (savedDisableUntil) {
      const disableUntilDate = new Date(parseInt(savedDisableUntil, 10));
      const now = new Date();
      if (now < disableUntilDate) {
        setIsButtonDisabled(true);
        setDisableUntil(disableUntilDate);
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    emailjs.sendForm('service_atlgje8', 'template_f85actt', e.target, 'bGgGWVkG-cjZGv-Pw')
      .then((result) => {
        alert('Message envoyé avec succès !');
        e.target.reset(); // Réinitialise le formulaire
        // Bloquer le bouton pendant 5 minutes
        const now = new Date();
        const fiveMinutesLater = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes
        localStorage.setItem('disableUntil', fiveMinutesLater.getTime());
        setIsButtonDisabled(true);
        setDisableUntil(fiveMinutesLater);
      }, (error) => {
        alert('Erreur lors de l\'envoi du message, veuillez réessayer.');
      });
  };

  return (
    <section className="home">
      <motion.div
        className="text-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Contactez Moi
        </motion.h1>
        
        <motion.form
          className="contact-form"
          onSubmit={sendEmail} // Ajout de l'attribut onSubmit
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="from_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="from_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isButtonDisabled}
          >
            Envoyer
          </motion.button>
        </motion.form>
      </motion.div>
      
      <div className="shape">
        <div className="shape2"></div>
      </div>
    </section>
  );
};

export default ContactMe;
