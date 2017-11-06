// Axios låter oss göra HTTP-requests
import axios from 'axios'

// Fråga servern om detta
export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
