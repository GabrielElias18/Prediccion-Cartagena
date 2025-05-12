import React, { useState } from "react";
import { predecirDemanda } from "./api"; // Importar el servicio
import './App.css';

const App = () => {
  const [formulario, setFormulario] = useState({
    lugarOrigen: "Nacional", // Valor por defecto
    edad: "",
    tiempoEstancia: "",
    presupuestoPromedio: "",
    motivoViaje: "Vacaciones", // Valor por defecto
    usoTourGuiado: "Si", // Valor por defecto
    satisfaccionVisita: "Baja", // Valor por defecto
    nivelGastoTotal: "",
    cantidadActividades: "",
    planeaRegresar: "No", // Valor por defecto
  });

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await predecirDemanda(formulario);
      setResultado(data); // Guardamos el resultado de la predicción
    } catch (error) {
      console.error("Error al predecir demanda:", error);
      alert("Hubo un error con la predicción.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediccion-container">
      <h1 className="prediccion-title">Predicción de Turismo</h1>
      <form onSubmit={handleSubmit} className="prediccion-form">
        <div className="form-row">
          <label htmlFor="lugarOrigen" className="form-label">Lugar de Origen:</label>
          <select
            name="lugarOrigen"
            value={formulario.lugarOrigen}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Nacional">Nacional</option>
            <option value="Internacional">Internacional</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="edad" className="form-label">Edad:</label>
          <input
            type="number"
            name="edad"
            value={formulario.edad}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="tiempoEstancia" className="form-label">Tiempo de Estancia:</label>
          <input
            type="number"
            name="tiempoEstancia"
            value={formulario.tiempoEstancia}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="presupuestoPromedio" className="form-label">Presupuesto Promedio:</label>
          <input
            type="number"
            name="presupuestoPromedio"
            value={formulario.presupuestoPromedio}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="motivoViaje" className="form-label">Motivo de Viaje:</label>
          <select
            name="motivoViaje"
            value={formulario.motivoViaje}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Vacaciones">Vacaciones</option>
            <option value="Negocios">Negocios</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="usoTourGuiado" className="form-label">¿Usa Tour Guiado?:</label>
          <select
            name="usoTourGuiado"
            value={formulario.usoTourGuiado}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="satisfaccionVisita" className="form-label">Satisfacción de la Visita:</label>
          <select
            name="satisfaccionVisita"
            value={formulario.satisfaccionVisita}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="nivelGastoTotal" className="form-label">Nivel de Gasto Total:</label>
          <input
            type="number"
            name="nivelGastoTotal"
            value={formulario.nivelGastoTotal}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="cantidadActividades" className="form-label">Cantidad de Actividades:</label>
          <input
            type="number"
            name="cantidadActividades"
            value={formulario.cantidadActividades}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="planeaRegresar" className="form-label">¿Planea Regresar?:</label>
          <select
            name="planeaRegresar"
            value={formulario.planeaRegresar}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit" className="prediccion-button" disabled={loading}>
          {loading ? "Cargando..." : "Predecir"}
        </button>
      </form>

      {resultado && (
        <div className="resultado">
          <h2 className="resultado-title">Resultado de Predicción:</h2>
          <p className="resultado-text">
            Recomendar Cartagena: <span className="destacado">{resultado.recomendarCartagena}</span>
          </p>
          <p className="resultado-text">
            Fiabilidad: <span className="destacado">{resultado.fiabilidad}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
