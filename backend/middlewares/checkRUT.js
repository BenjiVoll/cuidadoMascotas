const Pet = require('../models/pet');

const checkRUT = (req, res, next) => {
    Pet.findOne({ _id: req.body.rut }, (err, pet) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el usuario" })
        }
        if (!pet) {
            return res.status(404).send({ message: "El usuario no existe" })
        }
        return res.status(200).send({ message: "Usuario logeado correctamente", rol: "administrador" })
    })
}

module.exports = checkRUT;