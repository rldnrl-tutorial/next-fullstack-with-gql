import apiClient from '@/libs/config/apiClient'
import { Link } from '@prisma/client'

export class LinksService {
  static async fetchLinks(): Promise<Link[]> {
    const response = await apiClient.get<Link[]>('/links')
    return response.data
  }
}
