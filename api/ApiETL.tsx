import axios from 'axios';

axios.defaults.baseURL = process.env.EXPO_PUBLIC_URL_ETL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;