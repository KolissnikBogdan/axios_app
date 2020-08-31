import { api } from '../config'
import { IAlbum } from '../models/album'

export async function getAlbums(): Promise<IAlbum[]> {
  let res = await api.get('/albums')
  if (res.status !== 200) throw new Error(`Can't fetch post list`)

  return res.data
}

export async function getAlbumsId(id: any): Promise<IAlbum[]> {
  let res = await api.get(`/albums/${id}`)
  if (res.status !== 200) throw new Error(`Can't fetch post list`)

  return res.data
}