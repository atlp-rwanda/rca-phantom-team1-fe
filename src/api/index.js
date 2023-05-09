import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'accessToken'
)}`
export default axios.create({
  baseURL: 'https://phantom-techbandit.onrender.com',
})
