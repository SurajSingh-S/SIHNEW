const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

const api = {
  login: async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  register: async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  fetchAlumni: async () => {
    const response = await fetch(`${API_URL}/alumni`);
    return response.json();
  },

  fetchJobs: async () => {
    const response = await fetch(`${API_URL}/jobs`);
    return response.json();
  },

  fetchSuccessStories: async () => {
    const response = await fetch(`${API_URL}/success-stories`);
    return response.json();
  },
};

export default api;