import http, { endURL } from 'app/src/services/_HttpCommon'
// import { IResponseNews, IResponseRelated } from 'src/types/INews'

const prefix = 'agreement-convention'

class PublicNoticeService {
  // list (data:unknown): Promise<IResponseVideo> {
  list (data:unknown): Promise<any> {
    return http.post(`${prefix}/list${endURL}`, data)
  }
}

export default new PublicNoticeService()
