import axios from 'axios'

export const axiosApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})
