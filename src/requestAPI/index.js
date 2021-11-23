import axios from 'axios';

const baseURL = 'http://localhost:5000/';

export default async function (config) {
  return axios({ ...config, baseURL });
}
