import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('http://localhost:8080/api/login', { email, password })
}

const getAllUsers = (id) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${id}`, { id: id })
}

export {
    handleLoginApi, getAllUsers
}
