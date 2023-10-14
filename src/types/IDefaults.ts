/**
 * Types
 */
export type TResponseType = 'success' | 'error'
export type TColumnImage = 'bannerMobile' | 'bannerDesktop' | 'imageNews'

/**
 * Interfaces
 */
export interface IColumnImage<T> {
  [key: string]: {
    path: T
    file_name: T
  }
}

export interface IDefaultResponse {
    data: any
    error: boolean
    success: boolean
    status: number
    message: unknown
}
