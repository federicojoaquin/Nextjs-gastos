"use client"

import React, {useState} from 'react'
import './Styles/ListaDeGastos.css' 
import {BsTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormEdit from './FormEdit'

function Gasto({id, desc, monto, fecha, tipo, frec, eliminarGasto, actualizarGato, array }) {

  const [showDel, setShowDel] = useState(false);
  

  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <>
      <div className='gasto row'>
        <div className='col-md-11 col-sm-11'>
          <h2 className='gasto-title'>{desc}</h2>
          <p className='detalle-gasto'>Monto: <b className='detalle-gasto'>{monto}</b></p>
          <p className='detalle-gasto'>Fecha: <b className='detalle-gasto'>{fecha}</b></p>
          <p className='detalle-gasto'>Tipo: <b className='detalle-gasto'>{tipo}</b></p>
          <p className='detalle-gasto'>Frecuencia: <b className='detalle-gasto'>{frec}</b></p>
        </div>
        <div className='col-md-1 col-sm-1'>
          <div className='row justify-content-center' >
            <div className='iconos row justify-content-end' style={{cursor: 'pointer'}} onClick={handleShowDel}><BsTrashFill /></div>
            <div className='iconos row justify-content-end' style={{cursor: 'pointer'}} onClick={handleShowEdit}><AiFillEdit /></div>
          </div>
          
        </div>  
      </div>

      <Modal show={showDel} onHide={handleCloseDel}>
        <Modal.Header closeButton>
          <Modal.Title>Desea eliminar el gasto ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-light' onClick={handleCloseDel}>
            Cerrar
          </Button>
          <Button variant="primary" className="btn btn-danger" onClick={() => {handleCloseDel(); 
          eliminarGasto(id);}}>
            <b>Borrar</b>
          </Button>
        </Modal.Footer>

      </Modal>

      <FormEdit showEdit={showEdit} handleCloseEdit={handleCloseEdit}/>

      
    </>
  )
}

export default Gasto; 