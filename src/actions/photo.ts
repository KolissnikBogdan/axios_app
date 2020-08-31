import { api } from '../config'
import { IPhoto } from '../models/photo'

export async function getPhoto(): Promise<IPhoto[]> {
  let res = await api.get('/photos')
  if (res.status !== 200) throw new Error(`Can't fetch post list`)

  return res.data
}

export async function getPhotoAlbum(id: any): Promise<IPhoto[]> {
  let res = await api.get(`/photos?albumId=${id}`)
  if (res.status !== 200) throw new Error(`Can't fetch post list`)

  return res.data
}