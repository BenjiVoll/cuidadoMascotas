import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/users`);
    return response
}

const createUser = (user) => {
    const response = axios.post(`${process.env.SERVIDOR}/user`, {
        name: user.name,
        age: user.age,
        email: user.email,
        telephonenumber: user.telephonenumber,
        apartmentnumber: user.apartmentnumber,
        numberpets: user.numberpets,
        role: user.role,
        pet: user.pet,
 
    });
    return response
}

const getUser = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/user/search/${id}`)
    return response
}

const updateUser = (id, user) => {
    const response = axios.put(`${process.env.SERVIDOR}/user/update/${id}`, user)
    return response
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser
}