import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import history from '../../utils/history'

const Header: React.FC = props => {
  const user = useSelector((state: RootState) => state.user)

  console.log(user)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <a
            style={{cursor: 'pointer'}}
            onClick={() => {
              history.push('/')
            }}
          >
            Axios App
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/albums">Albums</Nav.Link>
            <Nav.Link href="/">Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
