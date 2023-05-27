
"use client"
/* eslint-disable react-hooks/rules-of-hooks */


import { useState, useEffect, React }  from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Gastos.css'
import AddButton from './components/AddButton'
import Search from './components/Search'
import Gasto from './components/Gasto'

function page() {

  const [gastos, setGastos] = useState([]); 
  const [offset, setOffset] = useState(0);
  const [keyNumb, setKeyNumb] = useState(0); 

  const deleteGasto = async (id) => {
    try {
      console.log(id)
      const deleteGas = await fetch(`https://gastosdemo-api.onrender.com/gastos/${id}`, {
        method: "DELETE", 
      })
      const gastosNew = gastos.filter(gasto => gasto.gas_id !== id); 
      setGastos(gastosNew);
    } catch(e) {
        console.log(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://gastosdemo-api.onrender.com/gastos?change=${offset}`);
      const gastos = await response.json();
      setGastos(gastos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const goToPreviousPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 4, 0));
  };

  const goToNextPage = () => {
    setOffset((prevOffset) => prevOffset + 4);
  };


  return (
    <>
        
            <div className='main'>
              <h1 className='mainTitle'>Formulario Gastos</h1>
                <AddButton />
                <div className='gastosContainer'>
                    <div className='container'>
                        <div className='row'>
                            {/* <div className='formulario col-md-4 col-sm-12'>
                                <Formulario onSubmit={agregarGastos}/>
                            </div> */}
                            <div className='tabla col-md-12 col-sm-12'>
                                <div className='row justify-content-around'>
                                    <div className='col-md-4 my-3'>
                                        {/* <Link href='/Gastos' className="btn btn-outline-dark buttonLink">Refrescar</Link> */}
                                        <button className="btn btn-light buttonLink" onClick={goToPreviousPage} disabled={offset === 0}>Anterior</button>
                                        <button className="btn btn-light buttonLink" onClick={goToNextPage}>Siguiente</button>
                                    </div>
                                    {/* Copiar lo del search */}
                                    {/* <Search />  */}
                                </div>
                            
                            </div>
                            

                        </div>
                        {/* linea */}
                        <div className='row'>
                          <div className='col-md-12'>
                              { 
                                  
                                  gastos.map((gasto) => 
                                      <Gasto 
                                          key={gasto.gas_id}
                                          eliminarGasto={deleteGasto}
                                          id={gasto.gas_id}
                                          desc={gasto.gas_descripcion}
                                          monto={gasto.gas_monto}
                                          fecha={gasto.gas_fecha}
                                          tipo={gasto.gas_tipo}
                                          frec={gasto.gas_fecuencia}
                                          />)
                          
                              }
                          </div>
                     
                        </div>
                        {/* linea */}        
                    </div>
                </div>
            </div>
            
        
    </>
  )
}

export default page; 