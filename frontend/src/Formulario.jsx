import React, { useState } from "react";
import axios from "axios";

const Formulario = ({ onResultado }) => {
  const [formData, setFormData] = useState({
    lugarOrigen: "Nacional",
    edad: 30,
    tiempoEstancia: 3,
    presupuestoPromedio: 1000,
    motivoViaje: "Vacaciones",
    usoTourGuiado: "Sí",
    satisfaccionVisita: "Alta",
    nivelGastoTotal: 1500,
    cantidadActividades: 5,
    planeaRegresar: "Sí",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "edad" || name.includes("Total") || name.includes("Estancia") || name.includes("Actividades") || name === "presupuestoPromedio"
        ? parseInt(value)
        : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/predecir", formData);
      console.log(res.data); // 👈 Agrega esto
      onResultado(res.data);
    } catch (err) {
      console.error("Error al predecir:", err);
      alert("Ocurrió un error al hacer la predicción");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Lugar de Origen:
        <select name="lugarOrigen" onChange={handleChange} value={formData.lugarOrigen}>
          <option>Nacional</option>
          <option>Internacional</option>
        </select>
      </label>
      <label>
        Edad:
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} />
      </label>
      <label>
        Tiempo de Estancia:
        <input type="number" name="tiempoEstancia" value={formData.tiempoEstancia} onChange={handleChange} />
      </label>
      <label>
        Presupuesto Promedio:
        <input type="number" name="presupuestoPromedio" value={formData.presupuestoPromedio} onChange={handleChange} />
      </label>
      <label>
        Motivo del Viaje:
        <select name="motivoViaje" onChange={handleChange} value={formData.motivoViaje}>
          <option>Vacaciones</option>
          <option>Negocios</option>
          <option>Otro</option>
        </select>
      </label>
      <label>
        ¿Usó tour guiado?
        <select name="usoTourGuiado" onChange={handleChange} value={formData.usoTourGuiado}>
          <option>Sí</option>
          <option>No</option>
        </select>
      </label>
      <label>
        Satisfacción de la visita:
        <select name="satisfaccionVisita" onChange={handleChange} value={formData.satisfaccionVisita}>
          <option>Baja</option>
          <option>Media</option>
          <option>Alta</option>
        </select>
      </label>
      <label>
        Nivel de gasto total:
        <input type="number" name="nivelGastoTotal" value={formData.nivelGastoTotal} onChange={handleChange} />
      </label>
      <label>
        Cantidad de actividades:
        <input type="number" name="cantidadActividades" value={formData.cantidadActividades} onChange={handleChange} />
      </label>
      <label>
        ¿Planea regresar?
        <select name="planeaRegresar" onChange={handleChange} value={formData.planeaRegresar}>
          <option>Sí</option>
          <option>No</option>
        </select>
      </label>
      <button type="submit">Predecir</button>
    </form>
  );
};

export default Formulario;
