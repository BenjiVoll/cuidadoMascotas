import axios from 'axios';

const getPets = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/pets`);
    return response
}

const createPet = (pet) => {
    const response = axios.post(`${process.env.SERVIDOR}/pet`, {
        user:user.id,
        name: pet.name,
        race: pet.race,
        diseases: pet.deseases,
        sex: pet.sex,
        age: pet.age,
        weight: pet.weight,
        colour: pet.colour,
        species: species.id,
 
    });
    return response
}

const getPet = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/pet/search/${id}`)
    return response
}

const updatePet = (id, pet) => {
    const response = axios.put(`${process.env.SERVIDOR}/pet/update/${id}`, pet)
    return response
}

module.exports = {
    getPets,
    createPet,
    getPet,
    updatePet
}