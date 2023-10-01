import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const api = axios.create();

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer xyzt`;
  config.headers.Name = "Murat";
  return config;
});

api.interceptors.response.use(
  (response) => {
    response.name = "Murat";
    return response;
  },
  (error) => {
    console.log({ error });
    return Promise.resolve({ data: [] });
  }
);

export default api;
