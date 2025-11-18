import axios from "axios";

const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;


const nasaImageApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
 params: {
   api_key: nasaApiKey,
 },
})
export default nasaImageApi;
