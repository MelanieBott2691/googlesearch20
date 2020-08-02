import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import { Container, Row, Col } from '../Grid/Grid';
import SaveBtn from '../SaveModal/SaveModal';
import API from '../../utils/API';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import './BookList.css';

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// component to render each book
export function BookListItem(props) {
  // function to handle saving book to db when save button is clicked
  const handleSaveBtn = (event) => {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // function to handle deleting book from db when delete button is clicked
  const handleDeleteBtn = (event) => {
    API.deleteBook(props.id)
      .then((res) => {
        // use loadBooks prop from Saved page component
        props.loadBooks();
        console.log(props.id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <li className="list-group-item" key={props.id}>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-10">
            <h3>{props.title}</h3>
            <p>Written By: {[props.authors].flat().join(', ')}</p>
            <p>{props.description}</p>
            <a className="input-view" href={props.link}>
              <i className="icon-zoom-in icon-large"></i>
            </a>
            {!props.id ? (
              <SaveBtn
                type=""
                className="input-save-btn btn-lg input-lg save"
                onClick={handleSaveBtn}>
                Save
              </SaveBtn>
            ) : (
              <DeleteBtn
                type="danger"
                className="input-delete-btn btn-lg input-lg delete"
                onClick={handleDeleteBtn}>
                Delete
              </DeleteBtn>
            )}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
// export default BookList
