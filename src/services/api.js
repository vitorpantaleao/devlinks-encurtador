import axios from 'axios'

export const key = "9e3d3ee89da6e73b87c0c25071b97f8bcf83b1e7"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization' : `Bearer ${key}`
    }
})

export default api