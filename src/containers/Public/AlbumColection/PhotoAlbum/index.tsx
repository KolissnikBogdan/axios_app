import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import * as photoActions from '../../../../actions/photo'
import history from '../../../../utils/history'

const PhotoAlbum = (album: any) => {
  const [photo, setPhoto] = useState<string>("")

  const loadAlbumsPhoto = async () => {
    try {
      const albumImg = await photoActions.getPhotoAlbum(album.id).then((res) => {
        return res[0].thumbnailUrl
      })
      setPhoto(albumImg)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadAlbumsPhoto()
  }, [])

  return (
    <Col md={6} lg={4}>
      <Card className="transform-on-hover">
        <a className="lightbox">
          <img
            src={photo}
            alt="Card Image"
            className="card-img-top"
          />
        </a>
        <Card.Body>
          <h6>
            <a onClick={() => history.push(`/album/${album.id}`)}>{album.title}</a>
          </h6>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PhotoAlbum
