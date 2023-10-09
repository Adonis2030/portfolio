import axios from "axios";

const api = axios.create({
  baseURL: "http://your-api-url.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url: string, params?: any) => {
  const response = await api.get(url, { params });
  return response.data;
};

export const post = async (url: string, data: any) => {
  const response = await api.post(url, data);
  return response.data;
};

export const put = async (url: string, data: any) => {
  const response = await api.put(url, data);
  return response.data;
};

export const remove = async (url: string) => {
  const response = await api.delete(url);
  return response.data;
};
