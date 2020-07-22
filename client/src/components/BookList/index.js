import React from 'react'
import Thumbnail from '../Thumbnail'
import { Container, Row, Col } from '../Grid'

// BookList renders a bootstrap list item
export function BookList ({ children }) {
  return <ul className='list-group'>{children}</ul>
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem ({
  thumbnail = 'https://placehold.it/300x300',
  title,
  description,
  href,
  handleSave
}) {
  return (
    <li className='list-group-item'>
      <Container>
        <Row>
          <Col size='xs-4 sm-2'>
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size='xs-8 sm-9'>
            <h3 className='title'>{title}</h3>
            <p className='synopsys'>Description: {description}</p>
            <a target='_blank' href={href} rel='noopener noreferrer'>
              Go to book!
            </a>
            <a
              target='_blank'
              href={href}
              rel='noopener noreferrer'
              type='success'
              className='btn btn-info link'
            >
              View Info
            </a>
            <a
              href='#'
              rel='noopener noreferrer'
              type='button'
              onClick={handleSave}
              className='btn btn-info'
            >
              Save
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  )
}
