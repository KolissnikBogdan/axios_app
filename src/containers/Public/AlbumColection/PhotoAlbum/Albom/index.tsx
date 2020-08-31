import React, { useEffect, useState } from 'react'
import { Container, Row, CardGroup } from 'react-bootstrap'

import * as photoActions from '../../../../../actions/photo'
import { RouteComponentProps } from 'react-router'
import { IAlbum } from '../../../../../models/album'

import Photo from './Photo'

import './style.scss'

interface IRouterProps {
  id: string
}

interface IProps extends RouteComponentProps<IRouterProps> {
  album: IAlbum
}

const Album: React.FunctionComponent<IProps> = (props) => {
  const [photos, setPhoto] = useState<any>([])

  const loadPhoto = async () => {
    try {
      const photo = await photoActions.getPhotoAlbum(props.match.params.id)
      setPhoto(photo)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadPhoto()
  }, [])


  return (
    <section className="gallery-block cards-gallery">
      <Container>
        <Row>
          {photos && photos.length > 0 && (
            <CardGroup>
              {photos.map((photo: any) => (
                <Photo key={photo.id} {...photo} />
              ))}
            </CardGroup>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Album
