import axios from 'axios';

const getBenefits = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/benefits`);
    return response
}

const createBenefit = (benefit) => {
    const response = axios.post(`${process.env.SERVIDOR}/benefit`, {
        name: benefit.name,
    });
    return response
}

const getBenefit = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/benefit/search/${id}`)
    return response
}

const updateBenefit = (id, benefit) => {
    const response = axios.put(`${process.env.SERVIDOR}/benefit/update/${id}`, benefit)
    return response
}

module.exports = {
    getBenefits,
    createBenefit,
    getBenefit,
    updateBenefit
}