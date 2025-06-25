export interface ICategories {
    id: number
    created_at: null | Date
    description: null | string
    name: string
    title: string
    updated_at: null | Date
}

export interface ISocialMedia {
    facebook?: string
    instagram?: string
    x?: string
    whatsapp?: string
    youtube?: string
}

export interface IInsurance {
    id?: number
    category_id?: number
    title?: string
    subtitle?: string
    description?: string
    phone?: string
    phone2?: string
    address?: string
    address2?: string
    mail?: string
    site?: string
    socialMedia: ISocialMedia
}

export interface IInsurences {
    id: number
    name: string
    title: string
    list?: IInsurance[]
    created_at: null | Date
    updated_at: null | Date
}
