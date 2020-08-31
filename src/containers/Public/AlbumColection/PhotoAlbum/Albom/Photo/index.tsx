import React, { useState } from 'react'
import { Card, Col, Modal } from 'react-bootstrap'
import './style.scss'

const Photo: React.FC = (photo: any) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={photo.url} alt=''/>
        </Modal.Body>
        <Modal.Footer>{photo.title}</Modal.Footer>
      </Modal>
      <Col md={6} lg={4}>
        <Card className="transform-on-hover">
          <a className="lightbox" onClick={handleShow}>
            <img
              src={photo.thumbnailUrl}
              alt="Card Image"
              className="card-img-top"
            />
          </a>
          <Card.Body>
            <h6>
              <a>{photo.title}</a>
            </h6>
            <p className="text-muted card-text">{photo.title}</p>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Photo
