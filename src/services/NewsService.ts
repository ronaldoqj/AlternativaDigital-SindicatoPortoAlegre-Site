import http, { endURL } from 'app/src/services/_HttpCommon'

const prefix = 'news'

class NewsService {
  listHome (data:unknown): Promise<unknown> {
    return http.post(`${prefix}/list-home${endURL}`, data)
  }

  list (data:unknown): Promise<unknown> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  get (data:unknown): Promise<unknown> {
    return http.post(`${prefix}/get${endURL}`, data)
  }

  related (data:unknown): Promise<unknown> {
    return http.post(`${prefix}/related${endURL}`, data)
  }
}

export default new NewsService()
