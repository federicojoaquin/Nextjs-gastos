"use client"

// import { useState, useEffect } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import './Gastos.css';
// import AddButton from './components/AddButton';
// import Search from './components/Search';
// import Gasto from './components/Gasto';

// function Page() {
//   const [gastos, setGastos] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const deleteGasto = async (id) => {
//     try {
//       const deleteGas = await fetch(`https://gastosdemo-api.onrender.com/gastos/${id}`, {
//         method: 'DELETE',
//       });
//       const gastosNew = gastos.filter((gasto) => gasto.gas_id !== id);
//       setGastos(gastosNew);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [offset]);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://gastosdemo-api.onrender.com/gastos?change=${offset}`, { next: { revalidate: 10 } });
//       const gastos = await response.json();
//       setGastos(gastos);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   const goToPreviousPage = () => {
//     setOffset((prevOffset) => Math.max(prevOffset - 4, 0));
//   };

//   const goToNextPage = () => {
//     setOffset((prevOffset) => prevOffset + 4);
//   };

//   return (
//     <>
//       <div className="main">
//         <h1 className="mainTitle">Gastos</h1>
//         <AddButton />
//         <div className="gastosContainer">
//           <div className="container">
//             <div className="row">
//               <div className="tabla col-md-12 col-sm-12">
//                 <div className="row justify-content-center">
//                   <div className="col-md-12 my-3" style={{ display: 'flex', justifyContent: 'center' }}>
//                     <button className="btn btn-light buttonLink" onClick={fetchData} disabled={loading}>
//                       {loading ? (
//                         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                       ) : (
//                         'Obtener/refrescar'
//                       )}
//                     </button>
//                     <button className="btn btn-light buttonLink" onClick={goToPreviousPage} disabled={offset === 0}>
//                       Anterior
//                     </button>
//                     <button className="btn btn-light buttonLink" onClick={goToNextPage}>
//                       Siguiente
//                     </button>
//                   </div>
//                   {/* Copiar lo del search */}
//                   {/* <Search /> */}
//                 </div>
//               </div>
//             </div>
//             {/* linea */}
//             <div className="row">
//               <div className="col-md-12">
//                 {gastos.map((gasto) => (
//                   <Gasto
//                     key={gasto.gas_id}
//                     eliminarGasto={deleteGasto}
//                     id={gasto.gas_id}
//                     desc={gasto.gas_descripcion}
//                     monto={gasto.gas_monto}
//                     fecha={gasto.gas_fecha}
//                     tipo={gasto.gas_tipo}
//                     frec={gasto.gas_fecuencia}
//                   />
//                 ))}
//               </div>
//             </div>
//             {/* linea */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

// import { useState, useEffect } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import './Gastos.css';
// import AddButton from './components/AddButton';
// import Search from './components/Search';
// import Gasto from './components/Gasto';

// function Page() {
//   const [gastos, setGastos] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const deleteGasto = async (id) => {
//     try {
//       const deleteGas = await fetch(`https://gastosdemo-api.onrender.com/gastos/${id}`, {
//         method: 'DELETE',
//       });
//       const gastosNew = gastos.filter((gasto) => gasto.gas_id !== id);
//       setGastos(gastosNew);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [offset]);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://gastosdemo-api.onrender.com/gastos?change=${offset}`, { next: { revalidate: 10 } });
//       const gastos = await response.json();
//       setGastos(gastos);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   const goToPreviousPage = () => {
//     setOffset((prevOffset) => Math.max(prevOffset - 4, 0));
//   };

//   const goToNextPage = () => {
//     setOffset((prevOffset) => prevOffset + 4);
//   };

//   return (
//     <>
//       <div className="main">
//         <h1 className="mainTitle">Gastos</h1>
//         <AddButton />
//         <div className="gastosContainer">
//           <div className="container">
//             <div className="row">
//               <div className="tabla col-md-12 col-sm-12">
//                 <div className="row justify-content-center">
//                   <div className="col-md-12 my-3" style={{ display: 'flex', justifyContent: 'center' }}>
//                     <button className="btn btn-light buttonLink" onClick={fetchData} disabled={loading}>
//                       {loading ? (
//                         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                       ) : (
//                         'Obtener/refrescar'
//                       )}
//                     </button>
//                     <button className="btn btn-light buttonLink" onClick={goToPreviousPage} disabled={offset === 0}>
//                       Anterior
//                     </button>
//                     <button className="btn btn-light buttonLink" onClick={goToNextPage}>
//                       Siguiente
//                     </button>
//                   </div>
//                   {/* Copiar lo del search */}
//                   {/* <Search /> */}
//                 </div>
//               </div>
//             </div>
//             {/* linea */}
//             <div className="row">
//               <div className="col-md-12">
//                 {gastos.length > 0 ? (
//                   gastos.map((gasto) => (
//                     <Gasto
//                       key={gasto.gas_id}
//                       eliminarGasto={deleteGasto}
//                       id={gasto.gas_id}
//                       desc={gasto.gas_descripcion}
//                       monto={gasto.gas_monto}
//                       fecha={gasto.gas_fecha}
//                       tipo={gasto.gas_tipo}
//                       frec={gasto.gas_fecuencia}
//                     />
//                   ))
//                 ) : (
//                   <p className="text-center">No hay nada que mostrar (Refresque para visualizar o )</p>
//                 )}
//               </div>
//             </div>
//             {/* linea */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './Gastos.css';
import AddButton from './components/AddButton';
import Search from './components/Search';
import Gasto from './components/Gasto';

function Page() {
  const [gastos, setGastos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const deleteGasto = async (id) => {
    try {
      const deleteGas = await fetch(`https://gastosdemo-api.onrender.com/gastos/${id}`, {
        method: 'DELETE',
      });
      const gastosNew = gastos.filter((gasto) => gasto.gas_id !== id);
      setGastos(gastosNew);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://gastosdemo-api.onrender.com/gastos?change=${offset}`, { next: { revalidate: 10 } });
      const gastos = await response.json();
      setGastos(gastos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
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
      <div className="main">
        <h1 className="mainTitle">Gastos</h1>
        <div className='container'>
          <p style={{textAlign: 'center'}}>App de gastos. <b>ACLARACIÓN: </b>La primer llamada a la API probablemente se demore 20 segundos al obtener los datos, 
          luego ya no habrá demora. Esto se debe al servicio en donde se desplego la base de datos y la API (Render.com: servicio gratuito para esta version DEMO), pero funciona correctamente.</p>
        </div>
        
        <AddButton />
        <div className="gastosContainer">
          <div className="container">
            <div className="row">
              <div className="tabla col-md-12 col-sm-12">
                <div className="row justify-content-center">
                  <div className="col-md-12 my-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-light buttonLink" onClick={fetchData} disabled={loading}>
                      {loading ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      ) : (
                        'Obtener/refrescar'
                      )}
                    </button>
                    <button className="btn btn-light buttonLink" onClick={goToPreviousPage} disabled={offset === 0}>
                      Anterior
                    </button>
                    <button className="btn btn-light buttonLink" onClick={goToNextPage}>
                      Siguiente
                    </button>
                  </div>
                  {/* Copiar lo del search */}
                  {/* <Search /> */}
                </div>
              </div>
            </div>
            {/* linea */}
            <div className="row">
              <div className="col-md-12">
                {offset === 0 && gastos.length === 0 && <p className="text-center">Cargando...</p>}
                {offset > 0 && gastos.length === 0 && <p className="text-center">No hay nada más que mostrar</p>}
                {gastos.length > 0 &&
                  gastos.map((gasto) => (
                    <Gasto
                      key={gasto.gas_id}
                      eliminarGasto={deleteGasto}
                      id={gasto.gas_id}
                      desc={gasto.gas_descripcion}
                      monto={gasto.gas_monto}
                      fecha={gasto.gas_fecha}
                      tipo={gasto.gas_tipo}
                      frec={gasto.gas_fecuencia}
                    />
                  ))}
              </div>
            </div>
            {/* linea */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
