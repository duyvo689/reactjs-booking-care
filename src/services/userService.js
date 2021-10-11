import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('http://localhost:8080/api/login', { email, password })
}

const getAllUsers = (id) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${id}`, { id: id })
}

const createNewUserService = (data) => {
    return axios.post('http://localhost:8080/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('http://localhost:8080/api/delete-user', { id: userId })
    return axios.delete('http://localhost:8080/api/delete-user', { data: { id: userId } })
}

const editUserService = (inputData) => {
    return axios.put('http://localhost:8080/api/edit-user', inputData)
}

const getAllCodeService = (inputTyle) => {
    return axios.get(`http://localhost:8080/api/allcode?tyle=${inputTyle}`)
}

export {
    handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService, getAllCodeService
}
