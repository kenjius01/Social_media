import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const uploadPost = (data: any) =>
    API.post('/post', data, { withCredentials: true });

export const getTimelinePosts = (id: number) => API.get(`/post/${id}/timeline`);

export const likePost = (postId: number, userId: number) =>
    API.post(`/post/${postId}/like`, { postId, userId });
