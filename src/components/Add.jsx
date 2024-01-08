import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="d-flex upload-container container justify-content-between">
          <div className='d-flex gap-2'>
            <h5>Upload new video</h5>
            <button onClick={handleShow} style={{background:'transparent',border:'none'}}><i class="fa-solid fa-cloud-arrow-up fa-2x" style={{color:'gold'}}></i></button>
          </div>
          <Modal>
            show = {show};
            onHide = {handleClose};
            backdrop = "static";
            keyboard = {false};
          </Modal>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i class= "fa-solid fa-film me-2 text-warning"></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          <div className=''>
            <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}> <h5>Watch History</h5></Link>
          </div>
      </div>
  )
}

export default Add
