import axios from '../config/axios'

export const handleGetUsersAPI = () => {
  return axios.get('/users')
}
