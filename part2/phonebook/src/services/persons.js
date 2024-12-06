import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  let req = axios.get(baseUrl);
  return req.then((response) => response.data);
};

const create = (newObject) => {
  let req = axios.post(baseUrl, newObject);
  return req.then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const update = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data);
};

export default { getAll, create, remove, update };
