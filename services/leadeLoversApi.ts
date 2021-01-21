import axios from 'axios';

const leadLoversapi = axios.create({
  baseURL: 'https://llapi.leadlovers.com/webapi',
});

export default leadLoversapi;
