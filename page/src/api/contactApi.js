import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8081'
const CONTACT_URL = `${API_BASE}/api/contact`

export const submitContact = async (data) => {
  const response = await axios.post(CONTACT_URL, data, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000,
  })
  return response.data
}
