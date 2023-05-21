"use client"

import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormEdit({showEdit, handleCloseEdit}) {

  
    const [formData, setFormData] = useState({
        // id: "", 
        desc: "", 
        monto: "", 
        fecha: "", 
        tipo: "",
        frec: ""
      }); 
    
      const handleForm = (e) => {
        const { name, value, type, checked } = e.target; 
    
        setFormData((prevForm) => ({ 
          ...prevForm, 
          [name]: type === "checkbox" ? checked : value, 
        }))
    
      }  

  return (
    <>
        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Editar gasto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    
  )
}

export default FormEdit
