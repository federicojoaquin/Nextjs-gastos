import React from 'react'
import styles from './Styles/AddButton.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { IoAdd } from 'react-icons/io' 
import Link from 'next/link'; 

function AddButton() {
  return (
    <>
      
      <Link href='/formulario' className="float">
      
        <i className="fa fa-whatsapp my-float">
            {/* <IoAdd /> */}
        </i>
      
      </Link>
    </>
  )
}

export default AddButton
