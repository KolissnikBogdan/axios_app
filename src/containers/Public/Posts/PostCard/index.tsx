import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostCard: React.FC = (post: any) => {
  return (
    <Card border="primary" className="mb-2">
      <Card.Body>
        <Link to={`/post/${post.id}`}>
          <Card.Title>{post.title}</Card.Title>
        </Link>
        <Card.Text>{post.body}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default PostCard
