/**
 * Interfaces
 */
export interface IFile {
  id: number
  path: string
  name?: string
  file_name: string
  description?: string
  mime_type?: string
  extension?: string
  size?: number
  deleted_at?: Date
  created_at: Date
  updated_at?: Date
}
