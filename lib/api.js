import axios from 'axios'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const login = (data) => API.post('/auth/login', data)
export const register = (data) => API.post('/auth/register', data)

export const getHabits = (token) =>
  API.get('/habits', { headers: { Authorization: `Bearer ${token}` } })

export const createHabit = (token, data) =>
  API.post('/habits', data, { headers: { Authorization: `Bearer ${token}` } })

export const completeHabit = (token, id) =>
  API.patch(`/habits/${id}/complete`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  })
