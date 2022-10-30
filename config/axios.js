import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "eae309a5421f429bdfc7fcb43c4d9391b",
  },
});
axiosInstance.interceptors.request.use(function (config) {
  //config.headers["a"]="dsdsd"
  return config;
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
});
