import axios from 'axios'
import React, { useState } from 'react'
import {toast, ToastContainer, Flip} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export const AddCustomer = () => {
  
   const [customer, setCustomer] = useState({
        firstName: "",
        secondName: "",
        firstLastName: "",
        secondLastName: "",
        identification: ""
    })

    const {firstName,secondName,firstLastName,secondLastName,identification}=customer
    const onInputChange= e=>{setCustomer({...customer,[e.target.name]:e.target.value})}

    const onSubmit= async e=> {
      e.preventDefault();
      await axios.post('https://localhost:7155/api/client', customer )
      .then(res => {
        res.status===201 || res.status===200
        ? 
        toast.success('Datos almacenados', {position: toast.POSITION.BOTTOM_LEFT, autoClose:2000, theme: "dark", onClose: onClear ,})
        : toast.warning('Algo salio mal', {position: toast.POSITION.BOTTOM_LEFT, autoClose:2000,theme: "dark", })
            })
      .catch(res =>{toast.error(res.message, {position: toast.POSITION.BOTTOM_LEFT, autoClose:2000, theme: "dark",})})
     }

     
     const onClear= ()=>{
        const inputsArray = Object.entries(customer);
        const clearInputsArray =    inputsArray.map(([key]) =>{return [key, '']})
        const inputsJson =   Object.fromEntries(clearInputsArray);
        setCustomer(inputsJson)
        }
       
   
    return (
        <>
        <div className='container py-3'>
            <div className='w-70 mx-auto shadow p-5'>
                <h4 className='text-center mb-4'>Nuevo cliente</h4>
                <ToastContainer  transition={Flip}></ToastContainer>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group py-1">
                        <input
                            type="text"
                            className="form-control form-control-md"
                            id="firstName"
                            name="firstName"
                            required
                            value={firstName}
                            onChange={e => onInputChange(e)}
                            placeholder="Primer nombre" />
                    </div>
                    <div className="form-group py-1">
                        <input
                            type="text"
                            className="form-control form-control-md"
                            name='secondName'
                            value={secondName}
                            onChange={e => onInputChange(e)}
                            placeholder="Segundo nombre" />
                    </div>
                    <div className="form-group py-1">
                        <input
                            type="text"
                            className="form-control form-control-md"
                            name='firstLastName'
                            required
                            value={firstLastName}
                            onChange={e => onInputChange(e)}
                            placeholder="Primer Apellido" />
                    </div>
                    <div className="form-group py-1">
                        <input
                            type="text"
                            className="form-control form-control-md"
                            name='secondLastName'
                            value={secondLastName}
                            onChange={e => onInputChange(e)}
                            placeholder="Segundo Apellido" />
                    </div>
                    <div className="form-group py-1">
                        <input
                            type="text"
                            className="form-control form-control-md"
                            name='identification'
                            value={identification}
                            onChange={e => onInputChange(e)}
                            placeholder="Cedula" />
                    </div>
                    <div className="form-group py-3">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        &nbsp;
                        &nbsp;
                        <button type="reset" onClick={ onClear} className="btn btn-danger">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
   
}
export default AddCustomer
