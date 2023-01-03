import * as yup from 'yup';

const userValidation = yup.object({
    name: yup.string()
        .min(4, "Debe contener minimo 4 caracteres")
        .max(40, "Debe contener maximo 40 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),
    age: yup.number()
        .min(2, "Debe contener minimo 2 caracteres")
        .max(40, "Debe contener maximo 40 caracteres")
        .default(18,)
        .required("La edad es obligatorio"),
    email: yup.string()
        .required("Indicar alguna enfermedad es obligacion")
        .matches(/^[a-zA-Z]+@gmail\.com$/,"El email no esta escrito correctamente"),
    telephonenumber: yup.number()
        .required("El telefono es obligatorio")
        .default(12345678,),
    apartmentnumber: yup.number()
        .required("El apartamento es obligatorio"),
    numberpets: yup.number()
        .min(1, "Debe contener minimo 1 caracteres")
        .max(150, "Debe contener maximo 150 caracteres")
        .required("El numero de mascotas es obligatorio"),
    role: yup.string()
})

export default userValidation


