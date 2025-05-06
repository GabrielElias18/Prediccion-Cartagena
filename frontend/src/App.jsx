import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formulario, setFormulario] = useState({
    lugarOrigen: "",
    edad: "",
    tiempoEstancia: "",
    presupuestoPromedio: "",
    motivoViaje: "",
    usoTourGuiado: "",
    satisfaccionVisita: "", // Cambiado para aceptar "alta" o "baja"
    nivelGastoTotal: "",
    cantidadActividades: "",
    planeaRegresar: "",
  });

  const [resultado, setResultado] = useState(null);

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (
      !formulario.lugarOrigen ||
      !formulario.edad ||
      !formulario.tiempoEstancia ||
      !formulario.presupuestoPromedio ||
      !formulario.motivoViaje ||
      !formulario.usoTourGuiado ||
      !formulario.satisfaccionVisita ||
      !formulario.nivelGastoTotal ||
      !formulario.cantidadActividades ||
      !formulario.planeaRegresar
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Convertimos la satisfacción de texto a un valor numérico
    const datos = {
      ...formulario,
      edad: Number(formulario.edad),
      tiempoEstancia: Number(formulario.tiempoEstancia),
      presupuestoPromedio: Number(formulario.presupuestoPromedio),
      satisfaccionVisita: formulario.satisfaccionVisita === "alta" ? 5 : 1, // Ejemplo de conversión
      nivelGastoTotal: Number(formulario.nivelGastoTotal),
      cantidadActividades: Number(formulario.cantidadActividades),
      planeaRegresar: formulario.planeaRegresar === "Sí" ? "Sí" : "No", // Aseguramos que sea "Sí" o "No"
    };

    try {
      const res = await axios.post("http://localhost:8080/predecir", datos);

      // Mostrar la respuesta en consola para verificar que es correcta
      console.log("Respuesta del backend:", res.data);

      // Actualizar el estado de resultado
      setResultado(res.data); // Guardamos la respuesta en el estado
    } catch (error) {
      console.error("Error en la predicción", error);
      alert("Hubo un error al realizar la predicción.");
    }
  };

  return (
    <div className="container">
      <h1>Predicción Turística</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Lugar de Origen</label>
          <input
            type="text"
            name="lugarOrigen"
            value={formulario.lugarOrigen}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Edad</label>
          <input
            type="number"
            name="edad"
            value={formulario.edad || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tiempo de Estancia (días)</label>
          <input
            type="number"
            name="tiempoEstancia"
            value={formulario.tiempoEstancia || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Presupuesto Promedio</label>
          <input
            type="number"
            name="presupuestoPromedio"
            value={formulario.presupuestoPromedio || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Motivo del Viaje</label>
          <input
            type="text"
            name="motivoViaje"
            value={formulario.motivoViaje}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Uso de Tour Guiado (Sí/No)</label>
          <input
            type="text"
            name="usoTourGuiado"
            value={formulario.usoTourGuiado}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Satisfacción de la Visita</label>
          <select
            name="satisfaccionVisita"
            value={formulario.satisfaccionVisita}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona</option>
            <option value="alta">Alta</option>
            <option value="baja">Baja</option>
          </select>
        </div>

        <div className="form-group">
          <label>Nivel de Gasto Total</label>
          <input
            type="number"
            name="nivelGastoTotal"
            value={formulario.nivelGastoTotal || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cantidad de Actividades</label>
          <input
            type="number"
            name="cantidadActividades"
            value={formulario.cantidadActividades || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>¿Planea Regresar? (Sí/No)</label>
          <input
            type="text"
            name="planeaRegresar"
            value={formulario.planeaRegresar}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Predecir</button>
      </form>

      {resultado && (
        <div className="resultado">
          <h2>Resultado:</h2>
          <p><strong>Recomendar Cartagena:</strong> {resultado.recomendarCartagena}</p>
          <p><strong>Confianza:</strong> {resultado.fiabilidad}</p>
        </div>
      )}
    </div>
  );
}

export default App;
