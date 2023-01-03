import axios from 'axios';

const getControlServices = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/controlServices`);
    return response
}

const createControlService = (controlService) => {
    const response = axios.post(`${process.env.SERVIDOR}/controlService`, {
        benefit: benefit.id,
        entrydate: controlService.entrydate,
        entryhour: controlService.entryhour,
        nameenter: controlService.nameenter,
        exitdate: controlService.exitdate,
        exithour: controlService.exithour,
        namewithdraw: controlService.namewithdraw,
        state: controlService.state,
    });
    return response
}

const getControlService = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/controlService/search/${id}`)
    return response
}

const updateControlService = (id, controlService) => {
    const response = axios.put(`${process.env.SERVIDOR}/controlService/update/${id}`, controlService)
    return response
}

module.exports = {
    getControlServices,
    createControlService,
    getControlService,
    updateControlService
}