import http, { endURL } from 'app/src/services/_HttpCommon'
import { IResponseNews, IResponseRelated } from 'src/types/INews'

const prefix = 'news'

class NewsService {
  listHome (data:unknown): Promise<unknown> {
    return http.post(`${prefix}/list-home${endURL}`, data)
  }

  list (data:unknown): Promise<IResponseNews> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  listNews (data:unknown): Promise<IResponseNews> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  get (data:unknown): Promise<IResponseNews> {
    return http.post(`${prefix}/get${endURL}`, data)
  }

  related (data:unknown): Promise<IResponseRelated> {
    return http.post(`${prefix}/related${endURL}`, data)
  }

  relatedDepartment (data:unknown): Promise<IResponseRelated> {
    return http.post(`${prefix}/related-department${endURL}`, data)
  }
}

export default new NewsService()
