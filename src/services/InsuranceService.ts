import http, { endURL } from 'app/src/services/_HttpCommon'
import { IResponseGenericPage } from 'src/types/IGenericPage'

const prefix = 'insurance'

class InsuranceService {
  list (data?:unknown): Promise<IResponseGenericPage> {
    return http.post(`${prefix}/list${endURL}`, data)
  }
}

export default new InsuranceService()
