import axios from 'axios';

// Set the base URL for your API
const baseURL = 'http://examination.24x7retail.com/api/v1.0';

// Set your API key
const apiKey = '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'apiToken': `Bearer ${apiKey}`, 
  },
});

export default axiosInstance;
