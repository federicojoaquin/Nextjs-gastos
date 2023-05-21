"use client"

import React, {useState} from 'react'
import './Formulario.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Formulario() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const submit = (e) => { 
    e.preventDefault(); 

    const gastoNuevo = { 
      // id: uuidv4(), 
      desc: formData.desc, 
      monto: formData.monto, 
      fecha: formData.fecha, 
      tipo: formData.tipo, 
      frec: formData.frec
    }

    // props.onSubmit(gastoNuevo); 
    console.log(gastoNuevo);

    fetch('http://localhost:9000/gastos', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(gastoNuevo), 
    }); 


  }

  return (
    
    <div className='page-container'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className = 'form-one-container'>
                <form id='transactionForm' onSubmit={submit}>
                    <label className='labelNormal' htmlFor="descripcion">Descripción:</label>
                    <input className='inputNormal' type="text" name="desc" id="desc" 
                    placeholder="Ingrese descripción del gasto"
                    onChange={handleForm}
                    value = {formData.desc}></input>
                  
                    <label className='labelNormal' htmlFor="monto">Monto:</label>
                    <input className='inputNormal' type="text" name="monto" id="monto"
                    placeholder="ingrese monto del gasto"
                    onChange={handleForm}
                    value = {formData.monto}></input>
                  
                    <label className='labelNormal' htmlFor="fecha">Fecha</label>
                    <input className='inputNormal' type="date" name="fecha" id="fecha" 
                    placeholder="Ingresa tu mail" required
                    onChange={handleForm}
                    value = {formData.fecha}></input>
                  
                    {/* <label htmlFor="tipo">Tipo:</label>   
                    <input type="text" name="tipo" id="tipo"></input> */}
                    
                    <div className='div-radio'>
                      Tipo:
                      <div className='radios-container'>
                        <div>
                          <input className='input-radio'
                            value={'eventual'}
                            onChange={handleForm}
                            type='radio'
                            name='tipo'
                            id='eventual'
                            checked={formData.tipo === 'eventual'}
                          />
                          <label className='label-radio' htmlFor='fijo'>Eventual</label>
                        </div>
                        <div>
                          <input className='input-radio'
                            value={'fijo'}
                            onChange={handleForm}
                            type='radio'
                            name='tipo'
                            id='fijo'
                            checked={formData.tipo === 'fijo'}
                          />
                          <label className='label-radio' htmlFor='fijo'>Fijo</label>
                        </div>
                      </div>
                    </div>
                    <label className='labelNormal' htmlFor="frecuencia">Frecuecia:</label>
                    <input className='inputNormal' type="number"
                    name="frec" id="frec"
                    onChange={handleForm}
                    value = {formData.frec}></input>
                  
                    <button type="submit" onClick={handleShow} className="button-submit">Agregar</button>
                </form> 
                          
            </div>
          </div>
             
        </div> 
        <div className='row justify-content-center'>
          <div className='col-md-2'>
            <div className='row justify-content-center'>
              <Link className='buttonVolver btn btn-outline-secondary' href='/'>Volver</Link>
            </div> 
          </div>  
        </div> 
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gasto agregado !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>     
    </div>
  )
}

// onSubmit={manejarEnvio}

export default Formulario; 