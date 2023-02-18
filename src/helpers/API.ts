import axios from "axios";

const BASE_URL = 'http://api.thecatapi.com/v1'

const API = axios.create({baseURL: BASE_URL });

export default API