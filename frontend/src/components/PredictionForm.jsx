import React, { useState } from 'react';
import { predecirDemanda } from '../api';

const PredictionForm = () => {
  const [formulario, setFormulario] = useState({
    lugarOrigen: "Nacional",
    edad: "",
    tiempoEstancia: "",
    presupuestoPromedio: "",
    motivoViaje: "Vacaciones",
    usoTourGuiado: "Si",
    satisfaccionVisita: "Baja",
    nivelGastoTotal: ""
  });

  const actividadesDisponibles = [
    "Visitar la Ciudad Amurallada",
    "Tour por el Castillo de San Felipe",
    "Paseo en lancha a Islas del Rosario",
    "Disfrutar de playas en Bocagrande",
    "Paseo en chiva rumbera",
    "Cena en restaurante típico",
    "Recorrido histórico guiado",
    "Tour de arte urbano en Getsemaní",
    "Visita al Museo del Oro Zenú",
    "Puesta de sol desde Café del Mar"
  ];
  

  const [actividadesSeleccionadas, setActividadesSeleccionadas] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (actividad) => {
    setActividadesSeleccionadas((prev) =>
      prev.includes(actividad)
        ? prev.filter((a) => a !== actividad)
        : [...prev, actividad]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const datosParaEnviar = {
        ...formulario,
        edad: Number(formulario.edad),
        tiempoEstancia: Number(formulario.tiempoEstancia),
        presupuestoPromedio: Number(formulario.presupuestoPromedio),
        nivelGastoTotal: Number(formulario.nivelGastoTotal),
        cantidadActividades: actividadesSeleccionadas.length
      };

      const data = await predecirDemanda(datosParaEnviar);
      setResultado(data);
    } catch (error) {
      console.error("Error al predecir demanda:", error);
      alert("Hubo un error con la predicción.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediction-container" id="prediction">
      <h2 className="prediction-title">Predicción de Turismo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="lugarOrigen" className="form-label">Lugar de Origen:</label>
          <select 
            id="lugarOrigen"
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
            id="edad"
            name="edad" 
            value={formulario.edad} 
            onChange={handleChange} 
            required 
            className="form-input" 
          />
        </div>

        <div className="form-row">
          <label htmlFor="tiempoEstancia" className="form-label">Tiempo de Estancia (días):</label>
          <input 
            type="number" 
            id="tiempoEstancia"
            name="tiempoEstancia" 
            value={formulario.tiempoEstancia} 
            onChange={handleChange} 
            required 
            className="form-input" 
          />
        </div>

        <div className="form-row">
          <label htmlFor="presupuestoPromedio" className="form-label">Presupuesto Promedio (USD):</label>
          <input 
            type="number" 
            id="presupuestoPromedio"
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
            id="motivoViaje"
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
            id="usoTourGuiado"
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
            id="satisfaccionVisita"
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
          <label htmlFor="nivelGastoTotal" className="form-label">Nivel de Gasto Total (USD):</label>
          <input 
            type="number" 
            id="nivelGastoTotal"
            name="nivelGastoTotal" 
            value={formulario.nivelGastoTotal} 
            onChange={handleChange} 
            required 
            className="form-input" 
          />
        </div>

        <div className="form-row">
          <label className="form-label">Actividades Realizadas:</label>
          <div className="checkbox-group">
            {actividadesDisponibles.map((actividad) => (
              <label key={actividad} className="checkbox-item">
                <input
                  type="checkbox"
                  value={actividad}
                  checked={actividadesSeleccionadas.includes(actividad)}
                  onChange={() => handleCheckboxChange(actividad)}
                />
                {actividad}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="prediction-button" disabled={loading}>
          {loading ? "Procesando..." : "Obtener Predicción"}
        </button>
      </form>

      {resultado && (
        <div className="resultado">
          <h3 className="resultado-title">Resultado de Predicción:</h3>
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

export default PredictionForm;
