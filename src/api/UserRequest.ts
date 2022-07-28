import axios from 'axios';
import { Userinfo } from '../pb/apiservice';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getNumFollows = (id: number) =>
    API.get(`/user/follow/${id}`).then((res) => res.data);

export const getUserInfo = (id: number) =>
    API.get(`/user/${id}`).then((res) => res.data);

export const updateUser = (data: Userinfo) =>
    API.put(`/user/${data.id}`, data, { withCredentials: true }).then(
        (res) => res.data,
    );

export const getAllFollowers = (id: number) =>
    API.get(`/user/follower/${id}`).then((res) => res.data);

export const getAllFollowing = (id: number) =>
    API.get(`/user/following/${id}`).then((res) => res.data);

export const FollowUser = (id: number, followerId: number) =>
    API.post(`/user/follow/${id}`, { followerId }).then((res) => res.data);

export const UnFollow = (id: number, followerId: number) =>
    API.delete(`/user/unfollow/${id}`, { data: { followerId } }).then(
        (res) => res.data,
    );
