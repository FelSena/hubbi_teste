import axios from "axios";
const BASE_URL = "https://swapi.dev/api/";

const API = axios.create({
  baseURL: BASE_URL,
});

export function clearBaseUrl(url) {
  const newUrl = url.replace(BASE_URL, "");
  return newUrl;
}

export default API;
