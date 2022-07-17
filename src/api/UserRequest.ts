import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getNumFollows = (id: number) =>
    API.get(`/user/follow/${id}`).then((res) => res.data);
export const getUserInfo = (id: number) =>
    API.get(`/user/${id}`).then((res) => res.data);
