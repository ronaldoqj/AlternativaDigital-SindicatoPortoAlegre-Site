import http, { endURL } from 'app/src/services/_HttpCommon'
import { IResponseGenericPage } from 'src/types/IGenericPage'
// import { IResponseNews, IResponseRelated } from 'src/types/INews'

const prefix = 'generic-page'

class GenericPageService {
  // list (data:unknown): Promise<IResponseDepartment> {
  list (data?:unknown): Promise<IResponseGenericPage> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  get (data:unknown): Promise<IResponseGenericPage> {
    return http.post(`${prefix}/get${endURL}`, data)
  }
}

export default new GenericPageService()
