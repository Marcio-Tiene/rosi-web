import axios from 'axios';

const leadLoversapi = axios.create({
  baseURL: 'http://llapi.leadlovers.com/webapi',
});

export default leadLoversapi;
