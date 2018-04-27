import axios from 'axios';

const API_URI = 'http://localhost:8000';

function apiKeyLogin(authToken) {
  return axios.get(`${API_URI}/admin-api/status?apikey=${authToken}`);
}

export default { apiKeyLogin };
