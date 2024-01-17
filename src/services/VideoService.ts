import http, { endURL } from 'app/src/services/_HttpCommon'
// import { IResponseNews, IResponseRelated } from 'src/types/INews'

const prefix = 'video'

class NewsService {
  // list (data:unknown): Promise<IResponseNews> {
  list (data:unknown): Promise<any> {
    return http.post(`${prefix}/list${endURL}`, data)
  }
}

export default new NewsService()
