package com.weka.turismo_cartagena.dtos;

import java.io.Serializable;

public class DatosDto implements Serializable {
    private String lugarOrigen; // {Nacional, Internacional}
    private int edad; // NUMERIC
    private int tiempoEstancia; // NUMERIC
    private int presupuestoPromedio; // NUMERIC
    private String motivoViaje; // {Vacaciones, Negocios, Otro}
    private String usoTourGuiado; // {Sí, No}
    private String satisfaccionVisita; // {Baja, Media, Alta}
    private int nivelGastoTotal; // NUMERIC
    private int cantidadActividades; // NUMERIC
    private String planeaRegresar; // {Sí, No}

    // Getters and Setters
    public String getLugarOrigen() {
        return lugarOrigen;
    }

    public void setLugarOrigen(String lugarOrigen) {
        this.lugarOrigen = lugarOrigen;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getTiempoEstancia() {
        return tiempoEstancia;
    }

    public void setTiempoEstancia(int tiempoEstancia) {
        this.tiempoEstancia = tiempoEstancia;
    }

    public int getPresupuestoPromedio() {
        return presupuestoPromedio;
    }

    public void setPresupuestoPromedio(int presupuestoPromedio) {
        this.presupuestoPromedio = presupuestoPromedio;
    }

    public String getMotivoViaje() {
        return motivoViaje;
    }

    public void setMotivoViaje(String motivoViaje) {
        this.motivoViaje = motivoViaje;
    }

    public String getUsoTourGuiado() {
        return usoTourGuiado;
    }

    public void setUsoTourGuiado(String usoTourGuiado) {
        this.usoTourGuiado = usoTourGuiado;
    }

    public String getSatisfaccionVisita() {
        return satisfaccionVisita;
    }

    public void setSatisfaccionVisita(String satisfaccionVisita) {
        this.satisfaccionVisita = satisfaccionVisita;
    }

    public int getNivelGastoTotal() {
        return nivelGastoTotal;
    }

    public void setNivelGastoTotal(int nivelGastoTotal) {
        this.nivelGastoTotal = nivelGastoTotal;
    }

    public int getCantidadActividades() {
        return cantidadActividades;
    }

    public void setCantidadActividades(int cantidadActividades) {
        this.cantidadActividades = cantidadActividades;
    }

    public String getPlaneaRegresar() {
        return planeaRegresar;
    }

    public void setPlaneaRegresar(String planeaRegresar) {
        this.planeaRegresar = planeaRegresar;
    }
}
