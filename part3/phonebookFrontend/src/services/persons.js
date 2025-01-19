import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons"

const getAll = () => {
  let req = axios.get(baseUrl);
  return req.then((response) => response.data);
};

const create = (newObject) => {
  let req = axios.post(baseUrl, newObject);
  return req.then((response) => response.data);
};

const remove = (id) => {
  let req = axios.delete(`${baseUrl}/${id}`);
  return req.then((response) => response.data);
};

const update = (id, newObject) => {
  let req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then((response) => response.data);
};

export default { getAll, create, remove, update };
