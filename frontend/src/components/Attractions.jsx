import React from 'react';

const AttractionCard = ({ title, description, imageUrl }) => {
  return (
    <div className="attraction-card">
      <img src={imageUrl} alt={title} className="attraction-image" />
      <div className="attraction-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Attractions = () => {
  const attractions = [
    {
      title: "Ciudad Amurallada",
      description: "El casco histórico rodeado por murallas coloniales con arquitectura colorida, plazas encantadoras y calles empedradas.",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/2028258092/display_1500/stock-photo-aerial-view-of-the-walled-city-ciudad-amurallada-in-the-beautiful-and-colonial-cartagena-de-2028258092.jpg"
    },
    {
      title: "Castillo de San Felipe",
      description: "Impresionante fortaleza construida por los españoles, considerada una obra maestra de la ingeniería militar de la época.",
      imageUrl: "https://t3.ftcdn.net/jpg/03/39/16/86/360_F_339168600_TKs0Xn9UA8rHBFnz4cZKZeOHnkmKv5dE.jpg"
    },
    {
      title: "Islas del Rosario",
      description: "Archipiélago con aguas cristalinas, arrecifes de coral y playas paradisíacas, perfecto para snorkel y actividades acuáticas.",
      imageUrl: "https://t3.ftcdn.net/jpg/01/85/06/82/360_F_185068205_cQlA3tOtRjs2VXD4DF3OBOJXRl0mqlVJ.jpg"
    },
    {
      title: "Plaza Santo Domingo",
      description: "Vibrante plaza colonial con restaurantes, cafés y la famosa escultura de Gertrudis de Botero.",
      imageUrl: "https://c8.alamy.com/comp/F5RDHK/restaurant-tables-in-plaza-santo-domingo-cartagena-F5RDHK.jpg"
    },
    {
      title: "Convento de la Popa",
      description: "Ubicado en el punto más alto de Cartagena, ofrece una vista panorámica espectacular y un convento colonial lleno de historia.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohBOms5uRFfQLeJ8Ku3c9ROXZpaJuyDhT-w&s"
    },
    {
      title: "Museo del Oro Zenú",
      description: "Exposición fascinante sobre la cultura indígena Zenú, con piezas de oro precolombinas y artefactos históricos.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPSWIt8KdkiiLz6X-uXJiCRhQWVj63lVnmg&s"
    }
  ];

  return (
    <section className="attractions" id="attractions">
      <div className="section-title">
        <h2>Principales Atracciones</h2>
      </div>
      <div className="attractions-grid">
        {attractions.map((attraction, index) => (
          <AttractionCard key={index} {...attraction} />
        ))}
      </div>
    </section>
  );
};

export default Attractions;
