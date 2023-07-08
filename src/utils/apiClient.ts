import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../constants/api'

export const fetchData = () => {
    const result: Promise<AxiosResponse> = axios.get(API_URL, {
        validateStatus: function (status) {
            return status == 200
        },
    })

    return result
}
