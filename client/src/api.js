import axios from "axios";

const api = axios.create({baseURL: "http://localhost:5000"});

export const createUser = (user) => api.post('user/createUser',user);
export const getAllUsers = () => api.get('/user/getAllUsers');