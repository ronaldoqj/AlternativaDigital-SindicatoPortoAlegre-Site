import axios, { type AxiosInstance } from 'axios'
import { baseURL, xdebugTrigger } from 'src/helpers/helpers'

const $baseURL = `${baseURL}api/site/`
export const endURL = `${xdebugTrigger}`

const apiClient: AxiosInstance = axios.create({
  baseURL: $baseURL as string,
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
