import axios from 'axios';

const API_URI = 'http://localhost:8000';

export default {
  state: {
    loading: false,
    name: 'kongui',
    reachable: false,
    token: '',
  },
  reducers: {
    setLoading: (state, payload) => Object.assign({}, state, { loading: payload }),
    setLoginSucess: state => (Object.assign({}, state, { reachable: true })),
  },
  effects: {
    async checkApiKey(payload) {
      this.setLoading(true);
      const response = await axios.get(`${API_URI}/admin-api/status?apikey=${payload.apikey}`);
      this.setLoading(false);
      if (response.status === 200) {
        this.setLoginSucess();
        localStorage.setItem('apikey', payload.apikey);
      }
    },
  },
};
