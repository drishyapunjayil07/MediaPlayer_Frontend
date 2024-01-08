import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
        <button onClick={handleShow} style={{width:'300px'}} className='btn btn-warning'>Add New Category</button>
    </div>
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title><i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
    </Modal.Header>

     <h7>please fill the form completely</h7>
    <Modal.Body>
     <form className='border border-secondary p-3 rounded'>
     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter category Id" />
     </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control type="text" placeholder="Enter category Name" />
   </Form.Group>

  

     </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary">Upload</Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default Category
