import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev.skg.tbk.co.id/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

export default api;