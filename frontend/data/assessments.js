import axios from 'axios';

const getAssessments = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/assessments`);
    return response
}

const createAssessment = (assessment) => {
    const response = axios.post(`${process.env.SERVIDOR}/assessment`, {
        controlservice: assessment.controlservice,
        point: assessment.point,
        comment: assessment.comment
    });
    return response
}

const getAssessment = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/assessment/search/${id}`)
    return response
}

module.exports = {
    getAssessments,
    createAssessment,
    getAssessment
}