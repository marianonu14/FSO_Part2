/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newContact) => {
  const request = axios.post(baseUrl, newContact);
  return request.then((response) => response.data);
};

const update = (id, newContact) => {
  return axios.put(`${baseUrl}/${id}`, newContact);
};

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, deleteContact };
