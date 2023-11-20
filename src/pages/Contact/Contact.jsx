import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import { FiSend } from 'react-icons/fi';
import "./contact.css"
import { motion } from "framer-motion"

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3g6syva', 'template_4fe49q2', form.current, 'bin5GxQVtyxvlXxXK')
      .then((result) => {
        alert("Email successfully sent!");
      }, (error) => {
        alert("Something went wrong!");
      });
      e.target.reset();
  };

  return (
    <motion.section className="contact section"
      animate={{ opacity: 1 }}
      initial={{opacity: 0}}
      transition={{ delay: 0.3 }}
    >
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          
          <p className="contact__description">
            Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">contact@stefanovic.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+41 76 343 41 62</h4>
              </div>
            </div>


          </div>

          <div className="contact__socials">
            <a href="https://www.instagram.com/curiosoofficial/" target="_blank" className="contact__socials-link">
              <FaInstagram />
            </a>

            <a href="https://github.com/Curiosoofficial" target="_blank" className="contact__socials-link">
              <FaGithub />
            </a>

            <a href="https://www.youtube.com/channel/UCR9g0lLZD9OuJMZiBVJAk3Q" target="_blank" className="contact__socials-link">
              <FaYoutube />
            </a>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="user_name"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your E-mail"
                className="form__control" 
                name="user_email"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
              <textarea 
                placeholder="Your Message"
                className="form__control textarea"
                name="message"
              >
              </textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
            
          </button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact