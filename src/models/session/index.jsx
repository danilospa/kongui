import konguiAPI from '../../clients';

export default {
  state: {
    loading: false,
    apiReachable: false,
    authToken: '',
    error: false,
  },
  reducers: {
    setLoading: (state, payload) => Object.assign({}, state, { loading: payload }),
    setLoginSucess: state => (Object.assign({}, state, { apiReachable: true })),
    setToken: (state, payload) => (Object.assign({}, state, { authToken: payload })),
    setError: state => (Object.assign({}, state, { error: true })),
  },
  effects: {
    async checkApiKey(payload) {
      this.setLoading(true);
      try {
        const response = await konguiAPI.apiKeyLogin(payload.apiKey);
        this.setLoginSucess();
        this.setToken(payload.apiKey);
      } catch (e) {
        this.setError(e);
      } finally {
        this.setLoading(false);
      }
    },
  },
};
