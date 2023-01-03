import * as yup from 'yup';

const specieValidation = yup.object({
    name: yup.string()
        .min(3, "Debe contener minimo 2 caracteres")
        .max(40, "Debe contener maximo 25 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),
})

export default specieValidation
