import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

function Save({ type = 'default', className, children, onClick }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const click = () => {
    handleShow();
    onClick();
  };

  return (
    <>
      <button
        onClick={click}
        className={['btn btn-lg', `btn-${type}`, className].join(' ')}>
        {children}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You Saved Your Book!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Come back to view your saved book at anytime!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Later!
          </Button>
          {/* <Button variant='primary' onClick={handleClose}>
            Done
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Save;
