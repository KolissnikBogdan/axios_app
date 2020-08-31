import React, { useEffect, useState } from 'react'
import { Container, Row, CardGroup } from 'react-bootstrap'

import * as albumsActions from '../../../actions/albums'
import PhotoAlbum from './PhotoAlbum'
import Pagination from '../../../components/Pagination'

const AlbumCollection = () => {
  const [state, setState] = useState<any>({ albums: [], photos: [] })
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const loadAlbums = async () => {
    try {
      const albums = await albumsActions.getAlbums()
      setState({ albums: albums })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadAlbums()
  }, [])

  const { albums } = state

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const currentPosts = albums && albums.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <Container>
      <Row>
        {albums && albums.length > 0 && (
          <div>
            <CardGroup>
              {currentPosts.map((album: any) => (
                <PhotoAlbum key={album.id} {...album} />
              ))}
            </CardGroup>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={albums.length}
              paginate={paginate}
            />
          </div>
        )}
      </Row>
    </Container>
  )
}

export default AlbumCollection
