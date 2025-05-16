package com.weka.turismo_cartagena.servicios;

import java.text.DecimalFormat;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.weka.turismo_cartagena.dtos.DatosDto;
import com.weka.turismo_cartagena.dtos.ResultadoDto;

import weka.classifiers.Classifier;
import weka.core.DenseInstance;
import weka.core.Instance;
import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;

@Service
public class PrediccionServicio {

    private Instances dataStructure;
    private Classifier classifier;

    public PrediccionServicio() throws Exception {
        // Cargar modelo
        ClassPathResource modelResource = new ClassPathResource("turismo.model");
        classifier = (Classifier) weka.core.SerializationHelper.read(modelResource.getInputStream());

        // Cargar estructura de datos (sin Planea_Regresar)
        ClassPathResource arffResource = new ClassPathResource("turismo_cartagena_optimizado.arff");
        DataSource source = new DataSource(arffResource.getInputStream());
        dataStructure = source.getDataSet();
        dataStructure.setClassIndex(dataStructure.numAttributes() - 1);
    }

    public ResultadoDto predecir(DatosDto datos) {
        try {
            Instance instance = new DenseInstance(10); // 10 atributos sin Planea_Regresar
            instance.setDataset(dataStructure);

            instance.setValue(0, datos.getLugarOrigen());
            instance.setValue(1, datos.getEdad());
            instance.setValue(2, datos.getTiempoEstancia());
            instance.setValue(3, datos.getPresupuestoPromedio());
            instance.setValue(4, datos.getMotivoViaje());
            instance.setValue(5, datos.getUsoTourGuiado());
            instance.setValue(6, datos.getSatisfaccionVisita());
            instance.setValue(7, datos.getNivelGastoTotal());
            instance.setValue(8, datos.getCantidadActividades());
            // El índice 9 ahora es la clase a predecir (Recomendar_Cartagena)

            double predictionValue = classifier.classifyInstance(instance);
            String prediction = dataStructure.classAttribute().value((int) predictionValue);            

            double[] probabilities = classifier.distributionForInstance(instance);
            double confidence = probabilities[(int) predictionValue];
            DecimalFormat df = new DecimalFormat("#.#");
            String confidencePercentage = df.format(confidence * 100) + "%";

            return new ResultadoDto(prediction, confidencePercentage);

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
