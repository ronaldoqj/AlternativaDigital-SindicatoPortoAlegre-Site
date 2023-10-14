import axios, { type AxiosInstance } from 'axios'
import { baseURL } from 'src/helpers/helpers'

const $baseURL = `${baseURL}api/site/`
const xdebugTrigger = '?XDEBUG_TRIGGER'
export const endURL = `${xdebugTrigger}`

const apiClient: AxiosInstance = axios.create({
  baseURL: $baseURL as string,
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
