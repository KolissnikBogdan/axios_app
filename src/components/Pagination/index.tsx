import React from 'react'
import { Nav } from 'react-bootstrap'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers: any = []

  for (let i: number = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <Nav className="justify-content-center">
        <ul className="pagination text-center">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </>
  )
}

export default Pagination
