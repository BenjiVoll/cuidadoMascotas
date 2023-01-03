import * as yup from 'yup';

const assessmentValidation = yup.object({
    point: yup.number()
        .min(1, "El puntaje debe ser mayor a 0")
        .max(5, "El puntaje debe ser menor a 5")
        .required("El puntaje es obligatorio"),
    comment: yup.string()
        .min(2, "Debe contener minimo 2 caracteres")
        .max(150, "Debe contener maximo 150 caracteres")
        .required("El comentario es obligatorio")
        .matches(/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g, "El nombre no puede contener caracteres especiales"),
})

export default assessmentValidation