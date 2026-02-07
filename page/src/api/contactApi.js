import axios from 'axios'

// 실기기 연동 시 VITE_API_URL에 노트북 IP 설정 (예: http://172.30.1.45:8081)
const API_BASE = import.meta.env.VITE_API_URL || 'http://172.30.1.45:8081'
const CONTACT_URL = `${API_BASE}/api/contact`

export const submitContact = async (data) => {
  const response = await axios.post(CONTACT_URL, data, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000,
  })
  return response.data
}

export { API_BASE }
