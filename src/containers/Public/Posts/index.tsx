import React, { useEffect, useState } from 'react'
import {
  Container,
  Col,
  Card,
  Row,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap'

import * as postsActions from '../../../actions/post'

import PostCard from './PostCard'
import Pagination from '../../../components/Pagination'

import './style.scss'

const Posts: React.FC = () => {
  const [searchQuery, setQuery] = useState('')
  const [state, setState] = useState<any>({
    posts: [],
    isOldestFirstID: true,
    isOldestFirstTitle: true,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const inputEvent = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const data = event.target.value
    setQuery(data)
    if(event.target.value === '') {
      loadPosts()
    }
  }

  const loadPosts = async () => {
    try {
      const posts = await postsActions.getPosts()
      setState({ posts: posts })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const { posts } = state

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const handleClick = (e: any) => {
    setState({ search: '' })
    loadPosts()
  }

  const filterItems: any[] =
    posts &&
    posts
      .filter((post: any) => {
        return post.body.toLowerCase().includes(searchQuery.toLowerCase())
      })

  const currentPosts = filterItems && filterItems.slice(indexOfFirstPost, indexOfLastPost);

  const sortById = () => {
    const { posts } = state
    let newPostList = posts
    if (state.isOldestFirst) {
      newPostList = filterItems && filterItems.sort((a, b) => a.id - b.id)
    } else {
      newPostList = filterItems && filterItems.sort((a, b) => b.id - a.id)
    }
    setState({ posts: newPostList, isOldestFirst: !state.isOldestFirst })
  }

  const sortByTitle = () => {
    const { posts } = state
    let newPostList = posts
    if (state.isOldestFirstTitle) {
      newPostList = filterItems && filterItems.sort((a, b) => (a.title > b.title ? 1 : -1))
    } else {
      newPostList = filterItems && filterItems.sort((a, b) => (a.title < b.title ? 1 : -1))
    }
    setState({
      posts: newPostList,
      isOldestFirstTitle: !state.isOldestFirstTitle,
    })
  }

  const toggleSortDate = () => {
    sortById()
  }

  const toggleSortTitle = () => {
    sortByTitle()
  }

  return (
    <React.Fragment>
      <Container>
        <Row className="mt-2">
          <Col md={8}>
            {posts && posts.length > 0 ? (
              <div>
                {currentPosts.map((post: any) => (
                  <PostCard key={post.id} {...post} />
                ))}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={filterItems.length}
                  paginate={paginate}
                />
              </div>

            ) : (
              <div>
                <Button type="primary" onClick={handleClick}>
                  Reload list
                </Button>
              </div>
            )}
          </Col>
          <Col md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Search</Card.Title>
                <InputGroup className="mt-3 mb-3">
                  <FormControl
                    type="text"
                    placeholder="Type for search..."
                    value={searchQuery}
                    onChange={inputEvent}
                  />
                  <Button variant="outline-secondary">
                    <img
                      alt="Logo"
                      src="https://cdn1.iconfinder.com/data/icons/app-user-interface-line/64/search_focus_user_interface_app_zoom-256.png"
                      width="25"
                      height="25"
                      className="d-inline-block align-top"
                    />
                  </Button>
                </InputGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  Sort posts
                  <a onClick={handleClick}>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/comment_cancel-128.png"
                      width="25"
                      height="25"
                      alt={''}
                      className="float-right align-content-center"
                    />
                  </a>
                </Card.Title>
                <Row>
                  <Button onClick={toggleSortTitle}>Sort by Title</Button>
                </Row>
                <Row>
                  <Button onClick={toggleSortDate}>Sort by Id</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Posts
