

// -------------------------------------- 3 -----------------------------------------

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormEdit({ showEdit, handleCloseEdit, id, desc, monto, fecha, tipo, frec }) {
  const [formData, setFormData] = useState({
    gas_id: id,
    gas_descripcion: desc,
    gas_monto: monto,
    gas_fecha: fecha,
    gas_tipo: tipo,
    gas_frec: frec,
  });

  console.log(formData);

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = (e) => { 
    e.preventDefault(); 

    const updatedFormData = {
        ...formData,
        gas_descripcion: document.getElementById('gas_descripcion').value,
        gas_monto: document.getElementById('gas_monto').value,
        gas_fecha: document.getElementById('gas_fecha').value,
        gas_tipo: document.getElementById('gas_tipo').value,
        gas_frec: document.getElementById('gas_frec').value,
    };
      
    setFormData(updatedFormData);
      

    // props.onSubmit(gastoNuevo); 
    console.log(updatedFormData);

    fetch(`https://gastosdemo-api.onrender.com/gastos/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(updatedFormData), 
    }); 


  }

  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar gasto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                name="gas_descripcion"
                type="text"
                id="gas_descripcion"
                value={formData.gas_descripcion}
                onChange={handleForm}
                contentEditable={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                name="gas_monto"
                type="text"
                id="gas_monto"
                value={formData.gas_monto}
                onChange={handleForm}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                name="gas_fecha"
                type="date"
                id="gas_fecha"
                value={formData.gas_fecha}
                onChange={handleForm}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                name="gas_tipo"
                id="gas_tipo"
                value={formData.gas_tipo}
                onChange={handleForm}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Frecuencia</Form.Label>
              <Form.Control
                name="gas_frec"
                id="gas_frec"
                value={formData.gas_frec}
                onChange={handleForm}
                autoFocus
              />
            </Form.Group>
            <Button variant="primary" type="submit">Save</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                Cerrar
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormEdit;
