/**
 * Interfaces
 */
export interface IGenericPage {
    id?: number
    name?: string
    title?: string
    link?: string
    text?: string
    description?: string
    image_id?: number
    image?: object
    created_at?: Date
    updated_at?: Date
}

export interface IResponseGenericPage {
  config: unknown
  data: IGenericPage
  status: number
  request: unknown
  statusText: string
}
