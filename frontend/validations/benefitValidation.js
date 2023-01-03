import * as yup from 'yup';

const benefitValidation = yup.object({
    name: yup.string()
        .min(5, "Debe contener minimo 6 caracteres")
        .max(60, "Debe contener maximo 60 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g, "El nombre no puede contener caracteres especiales"),
})

export default benefitValidation
