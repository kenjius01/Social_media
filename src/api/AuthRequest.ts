import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const logIn = (formData: FormData) =>
    API.post('/auth/login', formData, { withCredentials: true });
export const signUp = (formData: FormData) =>
    API.post('/auth/register', formData).then((res) => res.data);
export const logout = () => API.post('/auth/logout');
