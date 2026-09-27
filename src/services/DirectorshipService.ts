import http from 'app/src/services/_HttpCommon'
import { getValidImage } from 'src/helpers/helpers'

export interface DirectorshipMember {
  title: string
  surname: string
  subtitle: string
  description: string
  image: string
}

interface DirectorApiItem {
  first_name: string
  last_name: string | null
  role_name: string | null
  bank: { name: string } | null
  image: { path: string, file_name: string } | null
}

interface DirectorCategoryApiItem {
  name: string
  role_name: string | null
  directors: DirectorApiItem[]
}

class DirectorshipService {
  list (): Promise<object> {
    return http.get('director/list')
  }

  async membersByCategory (categoryName: string): Promise<DirectorshipMember[]> {
    const response = await this.list() as { data: DirectorCategoryApiItem[] }
    const category = response.data.find((item) => item.name === categoryName)

    return category?.directors.map((director) => ({
      title: director.first_name,
      surname: director.last_name || '',
      subtitle: director.role_name || category.role_name || category.name,
      description: director.bank?.name || '',
      image: getValidImage(director.image)
    })) || []
  }
}

export default new DirectorshipService()
