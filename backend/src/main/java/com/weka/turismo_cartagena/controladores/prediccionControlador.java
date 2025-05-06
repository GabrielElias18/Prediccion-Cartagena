    package com.weka.turismo_cartagena.controladores;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import com.weka.turismo_cartagena.dtos.DatosDto;
    import com.weka.turismo_cartagena.dtos.ResultadoDto;
    import com.weka.turismo_cartagena.servicios.PrediccionServicio;

    @RestController 
    @RequestMapping("/predecir")
    public class prediccionControlador {

        @Autowired
        private PrediccionServicio prediccionServicio;

        @PostMapping
        public ResultadoDto predecir(@RequestBody DatosDto datos) {
            return prediccionServicio.predecir(datos);
        }
    }