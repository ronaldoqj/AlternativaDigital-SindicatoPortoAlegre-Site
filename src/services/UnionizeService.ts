import http, { endURL } from 'app/src/services/_HttpCommon'
import httpFormData from 'app/src/services/_HttpFormDataCommon'
import { IResponseNews } from 'src/types/INews'
import { IUnionize } from 'src/types/IUnionize'
// import { IResponseRelated } from 'src/types/INews'

const prefix = 'unionize'

class UnionizeService {
  register (data:unknown): Promise<IResponseNews> {
    return http.post(`${prefix}/register${endURL}`, data)
  }

  getByCpf (data:unknown): Promise<IUnionize> {
    return http.post(`${prefix}/get-register-by-cpf${endURL}`, data)
  }

  registerPdfFile (data:unknown): Promise<IUnionize> {
    return httpFormData.post(`${prefix}/register-pdf-file${endURL}`, data)
  }

  print (data:unknown): Promise<IUnionize> {
    return httpFormData.post(`${prefix}/print${endURL}`, data)
  }
}

export default new UnionizeService()
