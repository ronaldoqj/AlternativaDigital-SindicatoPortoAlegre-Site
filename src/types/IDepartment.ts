/**
 * Types
 */
// export type TTypeNews = 'image' | 'video' | 'audio' | 'text'

/**
 * Interfaces
 */
export interface IDepartment {
    id: number
    name: string
    description?: string
    image_id?: null
    created_at: Date
    updated_at?: Date
}
