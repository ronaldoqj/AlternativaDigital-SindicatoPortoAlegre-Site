import http, { endURL } from 'app/src/services/_HttpCommon'
// import { IResponseNews, IResponseRelated } from 'src/types/INews'

const prefix = 'campaign'

class CampaignService {
  // list (data:unknown): Promise<IResponseCampaign> {
  list (data:unknown): Promise<any> {
    return http.post(`${prefix}/list${endURL}`, data)
  }
}

export default new CampaignService()
