import axios from "axios";

const BASE_URL = 'http://api.aparat.com/fa/v1/video/video'

const API = axios.create({baseURL: BASE_URL });

export default API