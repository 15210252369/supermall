import axios from 'axios'
export default function request(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000/api/v1'
        })
        instance.interceptors.response.use(res => {
            return res.data
        })
        instance(options).then(res => { resolve(res) }).catch(err => { reject(err) })
    })
}