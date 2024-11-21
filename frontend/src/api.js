import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getNotifications = () => axios.get(`${API_BASE_URL}/notifications`);
export const getEvents = () => axios.get(`${API_BASE_URL}/events`);
