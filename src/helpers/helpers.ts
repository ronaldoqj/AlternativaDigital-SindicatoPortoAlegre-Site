import { IDefaultResponse, TResponseType, TColumnImage, IColumnImage } from 'src/types/IDefaults'
import { INews } from 'src/types/INews'

/**
 * Helper Variables
 */
// export const domain = process.env.DOMAIN?.endsWith('/') ? process.env.DOMAIN : process.env.DOMAIN + '/'
// Sindicato dos Bancários de Porto Alegre e Região - SindBancários
export const applicationName = process.env.APPLICATION_NAME?.replace(/\/$/, '')
export const domain = process.env.DOMAIN?.replace(/\/$/, '')
export const baseURL = process.env.API?.endsWith('/') ? process.env.API : process.env.API + '/'
export const xdebugTrigger = process.env.xdebugTrigger ? process.env.xdebugTrigger : ''
export const defaultImagePath = 'assets/images/image-default.jpg'
export const defaultImage = `${baseURL}${defaultImagePath}`
export const carouselSettings = { autoPlay: 10000 }
export const gender = [
  { value: '', label: '' },
  { value: 'feminino', label: 'Feminino' },
  { value: 'masculino', label: 'Masculino' },
  { value: 'intersexo', label: 'Intersexo' },
  { value: 'nao_binario', label: 'Não Binário' },
  { value: 'outros', label: 'Outros' },
  { value: 'nao_informado', label: 'Não Informado' }
]
export const color = [
  { value: '', label: '' },
  { value: 'branca', label: 'Branca' },
  { value: 'preta', label: 'Preta' },
  { value: 'amarela', label: 'Amarela' },
  { value: 'parda', label: 'Parda' },
  { value: 'indigena', label: 'Indigena' },
  { value: 'nao_informado', label: 'Não Informado' }
]
export const states = [
  // { value: 'ac', label: 'Acre' },
  // { value: 'al', label: 'Alagoas' },
  // { value: 'am', label: 'Amazonas' },
  // { value: 'ap', label: 'Amapá' },
  // { value: 'ba', label: 'Bahia' },
  // { value: 'ce', label: 'Ceará' },
  // { value: 'df', label: 'Distrito Federal' },
  // { value: 'es', label: 'Espírito Santo' },
  // { value: 'go', label: 'Goiás' },
  // { value: 'ma', label: 'Maranhão' },
  // { value: 'mg', label: 'Minas Gerais' },
  // { value: 'ms', label: 'Mato Grosso do Sul' },
  // { value: 'mt', label: 'Mato Grosso' },
  // { value: 'pa', label: 'Pará' },
  // { value: 'pb', label: 'Paraíba' },
  // { value: 'pe', label: 'Pernambuco' },
  // { value: 'pi', label: 'Piauí' },
  // { value: 'pr', label: 'Paraná' },
  // { value: 'rj', label: 'Rio de Janeiro' },
  // { value: 'rn', label: 'Rio Grande do Norte' },
  // { value: 'ro', label: 'Rondônia' },
  // { value: 'rr', label: 'Roraima' },
  { value: 'rs', label: 'Rio Grande do Sul' }
  // { value: 'sc', label: 'Santa Catarina' },
  // { value: 'se', label: 'Sergipe' },
  // { value: 'to', label: 'Tocantins' }
]

/**
 * Helper Functions
 */
export const filterOnlyNumbers = (str:string) => {
  return str.replace(/\D/g, '')
}

export const getDay = (date: string) => {
  const day = date.split('-')
  return day[2]
}

export const getDates = (dates: Array<any>) => {
  const rangeDates = {
    initialDate: { day: '', month: '' },
    conector: null as null | string,
    finalDate: { day: '', month: '' }
  }

  let initialDay = dates[0].scheduled_date
  initialDay = initialDay.split('-')
  rangeDates.initialDate.day = initialDay[2]
  rangeDates.initialDate.month = shortMonth(dates[0].scheduled_date)

  if (dates.length > 1) {
    let finalDay = dates[dates.length - 1].scheduled_date
    finalDay = finalDay.split('-')
    rangeDates.finalDate.day = finalDay[2]
    rangeDates.finalDate.month = shortMonth(dates[dates.length - 1].scheduled_date)
  }

  if (dates.length > 2) {
    rangeDates.conector = 'A' as string
  } else if (dates.length > 1) {
    rangeDates.conector = 'E' as string
  }

  return rangeDates
}

export const shortMonth = (date: string) => {
  const month = date.split('-')

  // Obtendo o mês da segunda parte (índice 1)
  const monthNumber = parseInt(month[1], 10)

  // Mapeando o número do mês para o nome do mês
  const meses = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
  ]

  // Obtendo o nome do mês usando o mapeamento
  const monthName = meses[monthNumber - 1]
  return monthName // Saída: DEZ
}

export const metaImage = (path: string) => {
  let image = defaultImage
  if (path.length) {
    image = baseURL + path
  }
  return image
}

export const arrayChunk = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

export const getValidImage = (data: INews | IColumnImage<string>, column: TColumnImage): string => {
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
  /** permite apenas letras e numeros */
  // const rota = title.replace(/\s+/g, '_').replace(/[^\w-]/g, '')
  /** Converte caracteres acentuados em caracteres normal e aceita apenas letras e numeros e convert espacos em _ */
  const rota = title.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
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
