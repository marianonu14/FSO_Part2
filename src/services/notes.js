/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const baseUrl = 'http://localhost:3004/persons';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( response => response.data )
}

const create = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then( response => response.data )
}

const update = (id, newContact) => {
    return axios.put(`http://localhost:3004/persons/${id}`, newContact)
}

const deleteContact = (id) => {
    return axios.delete(`http://localhost:3004/persons/${id}`)
}

export default { getAll , create, update, deleteContact } 