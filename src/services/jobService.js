import api from './api';

const jobService = {
  getJobs: async () => {
    return await api.fetchJobs();
  },
  // Add more job-related methods as needed
};

export default jobService;