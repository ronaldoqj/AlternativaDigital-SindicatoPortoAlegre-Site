import http, { endURL } from 'app/src/services/_HttpCommon'
import { IResponseBanks } from 'src/types/IBank'
import { IResponseNews } from 'src/types/INews'

const prefix = 'search'

class SearchService {
  list (data:unknown): Promise<IResponseNews> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  listBanks (data:unknown): Promise<IResponseBanks> {
    return http.post(`${prefix}/list-banks${endURL}`, data)
  }
}

export default new SearchService()
