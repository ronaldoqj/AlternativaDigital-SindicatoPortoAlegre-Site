/**
 * Types
 */
// export type TTypeNews = 'image' | 'video' | 'audio' | 'text'

/**
 * Interfaces
 */
export interface IBank {
    id: number
    name: string
    description?: string
    image_id?: null
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
  data: IBank[]
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
export interface IResponseBanks {
  config: unknown
  data: IBank[] | IPagination
  status: number
  request: unknown
  statusText: string
}
