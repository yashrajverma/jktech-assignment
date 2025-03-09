export const API_BASE_URL = "http://localhost:5001/api";

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/users/login`,
    GOOGLE_LOGIN: `${API_BASE_URL}/auth/google`,
    REGISTER: `${API_BASE_URL}/users/register`,
    LOGOUT: `${API_BASE_URL}/users/logout`,
  },

  BLOGS: {
    CREATE: `${API_BASE_URL}/blogs`,
    GET_ALL: `${API_BASE_URL}/blogs`,
    GET_BY_ID: (id) => `${API_BASE_URL}/blogs/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/blogs/${id}`,
    DELETE: (id) => `${API_BASE_URL}/blogs/${id}`,
    SEARCH: `${API_BASE_URL}/blogs/search`,
  },

  USERS: {
    PROFILE: `${API_BASE_URL}/users/`,
    UPDATE_PROFILE: `${API_BASE_URL}/users/profile/update`,
  },
};
