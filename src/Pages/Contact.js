import React from "react";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <Fade delay="200">
      <div className="contact-wrapper">
        <div className="contact-container">
          <div classname="contact-header">
            <h2>
              Bonjour, je m'appelle
              <br />
              Frédéric Vannier.
              <br />
              Développeur web et graphiste,
              <br />
              actuellement à la recherche de
              <br />
              <span className="spanBold">nouvelles opportunités</span>
            </h2>
          </div>
          <div className="contact-text">
            <section className="first-section">
              <p>Intéressé par travailler avec moi?</p>
            </section>
            <section className="second-section">
              <p>
                N'hésitez pas à me contacter par e-mail
                pour une éventuelle collaboration
              </p>
            </section>
            <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
              <p className="email">frederic.vannier01@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}
