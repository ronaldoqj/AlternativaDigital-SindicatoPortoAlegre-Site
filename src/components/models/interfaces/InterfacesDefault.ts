export type ratioType = string | number | '1' | '16/9' | '4/3'
export type TScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ImageDefaultSize {
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
}

export interface ButtonDefaultSize {
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
}

export interface IDinamicScreen {
  screen: TScreenSize
  blockSize: number
}

export interface IDinamicList {
  open?: boolean
  screenBreak?: string
  currentScreen: IDinamicScreen
  listProp: Array<object>
}
