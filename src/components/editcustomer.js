import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

export const EditCustomer = () => {
    let navigate = useNavigate();
    let { idReg } = useParams();

    const [customer, setCustomer] = useState({
        id: "",
        firstName: "",
        secondName: "",
        firstLastName: "",
        secondLastName: "",
        identification: "",
        isActive: ""
    })


    const { id, firstName, secondName, firstLastName, secondLastName, identification, isActive } = customer
    const onInputChange = e => { setCustomer({ ...customer, [e.target.name]: e.target.value }) }

    useEffect(() => {
        listCustomer()
    }, [])

  const onSubmit = async e => {
  e.preventDefault();
  await axios.put(`https://localhost:7155/api/client/${idReg}`,  customer )
   .then(res => {
                console.log(res);
                res.status === 204 || res.status === 200
                    ?
                    toast.success('Datos actualizados', { position: toast.POSITION.BOTTOM_LEFT, autoClose: 1000, theme: "dark",  })
                    : toast.warning('Algo salio mal', { position: toast.POSITION.BOTTOM_LEFT, autoClose: 2000,theme: "dark", })
  
                })
            .catch(res =>{ toast.error(res.message, { position: toast.POSITION.BOTTOM_LEFT, autoClose: 4000 ,theme: "dark",}) }
            )
            
    }

    const listCustomer = async () => {
       const customer = await axios.get(`https://localhost:7155/api/client/${idReg}`, {headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      }}, {data:{}},)
        setCustomer(customer.data)

    }

    const onClear = () => {
        navigate('/Customers')
    }


    return (
        <>
            <div className='container py-3'>
                <div className='w-70 mx-auto shadow p-5'>
                    <ToastContainer transition={Flip} />
                    <h4 className='text-center mb-4'>Editar cliente</h4>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group py-1">
                            <input
                                type="text"
                                className="form-control form-control-md"
                                id='id'
                                name='id'
                                hidden
                                //required
                                value={id}
                                onChange={e => onInputChange(e)}
                                placeholder="ID" />
                        </div>
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
                        <div className="form-group py-1">
                            <input
                                type="text"
                                className="form-control form-control-md"
                                name='isActive'
                                hidden
                                value={isActive}
                                onChange={e => onInputChange(e)}
                                placeholder="activo" />
                        </div>
                        <div className="form-group py-3">
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            &nbsp;
                            &nbsp;
                            <button type="reset" onClick={onClear} className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default EditCustomer