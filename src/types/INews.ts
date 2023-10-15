import { IBank } from './IBank'
import { IDepartment } from './IDepartment'
import { IFile } from './IFile'

/**
 * Types
 */
export type TTypeNews = 'image' | 'video' | 'audio' | 'text'
export type TPositionNews = 'banner' | 'highlights' | 'geral'
export type TPositionFile = 'BeforeTitle' | 'BeforeText' | 'AfterText'
export type TNewsLayers = 'image_news' | 'video_news' | 'audio_news' | 'titles' | 'text'

/**
 * Interfaces
 */
export interface IBannerNews {
    id: number
    url: string
}

export interface INews {
  id: number
  type_news: TTypeNews
  position_news: TPositionNews
  banner_desktop_id?: number
  banner_desktop?: IFile
  banner_mobile_id?: number
  banner_mobile?: IFile
  image_news_id?: number
  image_news?: IFile
  position_image_news?: TPositionFile
  video_news?: string
  position_video_news?: TPositionFile
  audio_news_id?: number
  audio_news?: IFile
  position_audio_news?: TPositionFile
  start_date?: Date
  end_date?: Date
  topper: string
  title: string
  call: string
  text: string
  journalist_font?: string
  url_email?: string
  tags?: string
  instagram?: string
  facebook?: string
  twitter?: string
  whatsapp?: string
  created_at: Date
  updated_at?: Date
  departments?: IDepartment
  banks?: IBank
}

export interface IResponseNews {
  config: unknown
  data: INews
  status: number
  request: unknown
  statusText: string
}

export interface IResponseRelated {
  config: unknown
  data: INews[]
  status: number
  request: unknown
  statusText: string
}
