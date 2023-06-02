import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.response.use((response) => response.data);

export const getVideos = () => axios.get(`/videos`);
export const getVideoDetails = (id) => axios.get(`/videos/${id}`);

export const addComment = (videoId, name, comment) => axios.post(`/videos/${videoId}/comments`, {name,comment});
export const deleteComment = (videoId,commentId) =>  axios.delete(`/videos/${videoId}/comments/${commentId}`);
