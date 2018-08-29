import axios from 'axios';

const API_URI = 'http://127.0.0.1:8001';

export const getStatus = async () => {
  const req = `${API_URI}/status`;
  const res = await axios.get(req);

  console.log(res.data);
}