import axios from 'axios';

// Set the base URL for your API
const baseURL = 'http://examination.24x7retail.com/api/v1.0';

// Set your API key
const apiKey = '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf';

// Create an instance of Axios with the base URL and default headers
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`, // Assuming your API expects the API key in the Authorization header
  },
});

export default axiosInstance;
