import axios from 'axios'
import e from 'cors';
import { API_URL } from '../../config'


const Register = async (data) => {
    return axios.post(`${API_URL}/signup`, data)
    .then((res) => {
        return res.data;
    })
    .catch(e => {
        return e.response.data});
}

export default Register