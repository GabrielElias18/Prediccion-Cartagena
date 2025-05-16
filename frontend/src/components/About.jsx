import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>Sobre Cartagena</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Cartagena de Indias, declarada Patrimonio de la Humanidad por la UNESCO en 1984, 
            es una ciudad mágica que combina la influencia de España, África y las culturas 
            indígenas americanas.
          </p>
          <p>
            Fundada en 1533 por Pedro de Heredia, Cartagena fue uno de los puertos más 
            importantes del Caribe durante la época colonial española. Sus murallas defensivas, 
            construidas para proteger la ciudad de piratas y ataques enemigos, son hoy uno de 
            sus atractivos más emblemáticos.
          </p>
        </div>
        <img 
          src="https://c0.wallpaperflare.com/preview/200/576/1023/cartagena-colombia-trip-caribbean.jpg" 
          alt="Ciudad amurallada de Cartagena" 
          className="about-image"
        />
      </div>
    </section>
  );
};

export default About;