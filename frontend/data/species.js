import axios from 'axios';

const getSpecies = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/species`);
    return response
}

const createSpecie = (specie) => {
    const response = axios.post(`${process.env.SERVIDOR}/specie`, {
        name: specie.name,
    });
    return response
}

const getSpecie = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/specie/search/${id}`)
    return response
}

const updateSpecie = (id, specie) => {
    const response = axios.put(`${process.env.SERVIDOR}/specie/update/${id}`, specie)
    return response
}

module.exports = {
    getSpecies,
    createSpecie,
    getSpecie,
    updateSpecie
}