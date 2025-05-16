export const predecirDemanda = async (formulario) => {
    try {
      const response = await fetch("http://localhost:8080/predecir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
      });
  
      if (!response.ok) {
        throw new Error("Error en la predicción");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al hacer la predicción:", error);
      throw error;
    }
  };