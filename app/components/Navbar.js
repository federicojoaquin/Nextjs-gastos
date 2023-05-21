import React from 'react'
import Link from 'next/link'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link href={'/'} className="nav-link active">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                        </li>
                        <li className="nav-item">
                          <Link href={'/Gastos'} className="nav-link active">Gastos</Link>
                        </li>
                        <li className="nav-item">
                          <Link href={'/Finanzas'} className="nav-link active">Finanzas</Link>
                        </li>
                        <li className="nav-item">
                          <Link href={'/Gantt'} className="nav-link active">Gantt</Link>
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar; 
