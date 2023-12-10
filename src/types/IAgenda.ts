/**
 * Interfaces
 */
export interface IBannerAgenda {
    id: number
    url: string
}

export interface IAgenda {
  id: number
  image?: number
  card_image?: number
  scheduled_dates?: Date
  topper: string
  title: string
  call: string
  text: string
  created_at: Date
  updated_at?: Date
}

export interface IPaginationLinks {
  url: string
  label: string
  active: boolean
}

export interface IPagination {
  /** Simple pagination */
  current_page: number
  data: IAgenda[]
  first_page_url: string
  from: number
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: null | number
  to: null | number
  /** Additional for full pagination */
  last_page?: number
  last_page_url?: string
  links?: IPaginationLinks
  total?: number
}

export interface IResponseAgenda {
  config: unknown
  data: IAgenda | IPagination
  status: number
  request: unknown
  statusText: string
}

export interface IResponseRelated {
  config: unknown
  data: IAgenda[]
  status: number
  request: unknown
  statusText: string
}
