import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-app-3bde6.firebaseio.com/'
});

export default instance;
