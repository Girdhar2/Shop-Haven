import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shop-haven.onrender.com', // Replace with your backend server's URL and port
});

export default instance;
