import { IDefaultResponse, TResponseType, TColumnImage, IColumnImage } from 'src/types/IDefaults'

/**
 * Helper Variables
 */
export const baseURL = process.env.API?.endsWith('/') ? process.env.API : process.env.API + '/'
export const defaultImagePath = 'assets/images/image-default.jpg'
export const defaultImage = `${baseURL}${defaultImagePath}`

/**
 * Helper Functions
 */
export const arrayChunk = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

export const getValidImage = (data:IColumnImage<string>, column: TColumnImage): string => {
  let url = defaultImagePath
  switch (column) {
    case 'bannerMobile':
      if (data.banner_mobile) {
        url = `${data.banner_mobile.path}/${data.banner_mobile.file_name}`
      }
      break
    case 'bannerDesktop':
      if (data.banner_desktop) {
        url = `${data.banner_desktop.path}/${data.banner_desktop.file_name}`
      }
      break
    case 'imageNews':
    default:
      if (data.image_news) {
        url = `${data.image_news.path}/${data.image_news.file_name}`
      }
      break
  }
  return `${baseURL}${url}`
}

export const convertURL = (id: number, title: string) => {
  const rota = title.replace(/\s+/g, '_').replace(/[^\w-]/g, '')
  title = rota.toLowerCase()
  // return rota.toLowerCase()

  return { name: 'news', params: { id, title } }
}

/**
 * Helper Classes
 */
class ClassDefaultResponse {
  data: unknown
  error = false
  success = true
  status = 0
  message: unknown
}

export interface IResponse {
  data: unknown
  status: number
  response: {
    status: number,
    data: unknown
  }
  message: unknown
}

export const DefaultResponse = (response:IResponse, type: TResponseType): IDefaultResponse => {
  const responseDefault = new ClassDefaultResponse()
  const error = response
  switch (type) {
    case 'success':
      responseDefault.data = response?.data
      responseDefault.status = response?.status ?? 200
      responseDefault.error = false
      responseDefault.success = true
      break
    case 'error':
    default:
      responseDefault.error = true
      responseDefault.success = false
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        responseDefault.status = error.response.status
        responseDefault.message = error.response.data

        console.error('Error Status:', error.response.status)
        console.error('Error Data:', error.response.data)
      } else {
        // Ocorreu um erro antes de receber uma resposta do servidor
        console.error('Error:', error.message)
        responseDefault.status = 500
        responseDefault.message = error.message
      }
      break
  }

  return responseDefault
}
