import * as yup from 'yup';

const controlServiceValidation = yup.object({
    entrydate: yup.string()
        .required("La la fecha de entrada es obligatoria"),
    entryhour: yup.string()
        .required("Indicar la hora de entrada es obligatorio"),
    nameenter: yup.string()//forma especial,se debe cambiar
        .min(4, "Debe contener minimo 4 caracteres")
        .max(40, "Debe contener maximo 40 caracteres")
        .required("El nombre del que deja la mascota es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre dek que deja la mascota no puede contener caracteres especiales"),
    exitdate: yup.string(),
    exithour: yup.string(),
    namewithdraw: yup.string()
        .min(4, "Debe contener minimo 4 caracteres")
        .max(40, "Debe contener maximo 40 caracteres")
        .required("El nombre del que retira a la mascota es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre del que retira a la mascota no puede contener caracteres especiales"),
})

export default controlServiceValidation
