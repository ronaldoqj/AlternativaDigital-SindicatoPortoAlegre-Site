import { IBank } from './IBank'
import { IDepartment } from './IDepartment'
import { IFile } from './IFile'

/**
 * Types
 */
export type TStatus = 'started' | 'completed' | 'confirmed'

/**
 * Interfaces
 */

export interface IUnionize {
  id: number
  status: TStatus
}
