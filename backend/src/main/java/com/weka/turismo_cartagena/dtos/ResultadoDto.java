package com.weka.turismo_cartagena.dtos;

public class ResultadoDto {
    public String recomendarCartagena;
    public String fiabilidad;

    public ResultadoDto(String recomendarCartagena, String fiabilidad) {
        this.recomendarCartagena = recomendarCartagena;
        this.fiabilidad = fiabilidad;
    }

    public String getRecomendarCartagena() {
        return recomendarCartagena;
    }

    public void setRecomendarCartagena(String recomendarCartagena) {
        this.recomendarCartagena = recomendarCartagena;
    }

    public String getFiabilidad() {
        return fiabilidad;
    }

    public void setFiabilidad(String fiabilidad) {
        this.fiabilidad = fiabilidad;
    }
}
