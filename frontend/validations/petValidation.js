import * as yup from 'yup';

const petValidation = yup.object({
    name: yup.string()
        .min(2, "Debe contener minimo 2 caracteres")
        .max(25, "Debe contener maximo 25 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),
    race: yup.string()
        .min(2, "Debe contener minimo 2 caracteres")
        .max(40, "Debe contener maximo 40 caracteres")
        .required("La raza es obligatorio")
        .matches(/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g, "La raza no puede contener caracteres especiales"),
    diseases: yup.string()
        .min(2, "Debe contener minimo 2 caracteres")
        .max(250, "Debe contener maximo 250 caracteres")
        .required("Indicar alguna enfermedad es obligacion")
        .matches(/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g, "La enfermedad no puede contener caracteres especiales"),
    sex: yup.string()//forma especial,se debe cambiar
        .min(1, "Debe contener minimo 1 caracteres")
        .max(150, "Debe contener maximo 150 caracteres")
        .required("El sexo es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El sexo no puede contener caracteres especiales"),
    age: yup.number()
        .min(1, "Debe contener minimo 1 caracteres")
        .max(30, "Debe contener maximo 30 caracteres")
        .required("La es obligatorio"),
    weight: yup.number()
        .min(1, "Debe contener minimo 1 caracteres")
        .max(150, "Debe contener maximo 150 caracteres")
        .required("El peso es obligatorio"),
    colour: yup.string()
        .min(4, "Debe contener minimo 4 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El color es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El color no puede contener caracteres especiales"),
})

export default petValidation


