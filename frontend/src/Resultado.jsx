import React from "react";

const Resultado = ({ data }) => {
  return (
    <div>
      <h2>Resultado de la predicción</h2>
      <p><strong>¿Recomendaría Cartagena?:</strong> {data.recomendarCartagena}</p>
      <p><strong>Fiabilidad del modelo:</strong> {data.fiabilidad}</p>
    </div>
  );
};

export default Resultado;
