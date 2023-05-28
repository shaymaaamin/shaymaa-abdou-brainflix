import axios from "axios";

axios.defaults.baseURL = "https://project-2-api.herokuapp.com";
axios.defaults.params = { api_key: `84906660-7a1c-405b-a925-c0cc480ab985` };
axios.interceptors.response.use((response) => response.data);

export const getVideos = () => axios.get(`videos`);
export const getVideoDetails = (id) => axios.get(`videos/${id}`);
