/**
 * Types
 */
export type TResponseType = 'success' | 'error'
export type TColumnImage = 'bannerMobile' | 'bannerDesktop' | 'imageNews'
export type TStructureScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TStructureScreenDevice = 'mobile' | 'desktop'

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

export interface ITabsIcons {
  id: number
  name: string
  icon: string
  size: number
  viewBox: string
}
