import http, { endURL } from 'app/src/services/_HttpCommon'
import { IResponseAgenda, IResponseRelated } from 'src/types/IAgenda'

const prefix = 'agenda'

class AgendaService {
  list (data:unknown): Promise<IResponseAgenda> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  listAgenda (data:unknown): Promise<IResponseAgenda> {
    return http.post(`${prefix}/list${endURL}`, data)
  }

  get (data:unknown): Promise<IResponseAgenda> {
    return http.post(`${prefix}/get${endURL}`, data)
  }

  related (data:unknown): Promise<IResponseRelated> {
    return http.post(`${prefix}/related${endURL}`, data)
  }
}

export default new AgendaService()
