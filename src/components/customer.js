import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {toast, ToastContainer, Flip} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios'

export const Customer = () => {

  const [clients, setCustomer] = useState(null)
  
  useEffect(() => {
    listCustomer()
  }, [])

  const listCustomer= async () =>{
    const customer = await axios.get('https://localhost:7155/api/client')
    setCustomer(customer.data)
}

  const deletefn = (id) => {
    confirmAlert({
      title: 'Borrar datos',
      message: '¿Esta seguro de eliminar los datos?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await axios.delete(`https://localhost:7155/api/client/${id}`)
            .then(res => {
              res.status===204 || res.status===200
              ? 
              toast.success('Datos eliminados', {position: toast.POSITION.BOTTOM_LEFT, autoClose:1000, onClose:listCustomer,theme: "dark",  })
              : toast.warning('Algo salio mal', {position: toast.POSITION.BOTTOM_LEFT, autoClose:1000,theme: "dark", })
                  })
            .catch(res =>{toast.error(res.message, {position: toast.POSITION.BOTTOM_LEFT, autoClose:2000,theme: "dark",})})
          }
          
          
        },
        {
          label: 'No',
        }
      ]
    });
  };
  
  return (
    <>
      {clients != null ? (

        <div className="container">
          <div className="py-4">
            <ToastContainer  transition={Flip} ></ToastContainer>
            <div className="containeraddUser">
            <Link to="/Customer/Add" title="Nuevo cliente">
                <FontAwesomeIcon icon={faUserPlus} size='2x' ></FontAwesomeIcon>
              </Link>
            </div>
              
            <Table>
              <thead>
                <tr className="bg-dark text-white">
                  <th>Id</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Cedula</th>
                  <th>Estado</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.firstName === 'string' ? '' : client.firstName} {client.secondName === 'string' ? '' : client.secondName}</td>
                    <td>{client.firstLastName === 'string' ? '' : client.firstLastName} {client.secondLastName === 'string' ? '' : client.secondLastName}</td>
                    <td>{client.identification === 'string' ? '' : client.identification}</td>
                    <td>{client.isActive === true ? 'Activo' : 'Inactivo'}</td>
                    <td>
                      <Link to={`/Customer/Edit/${client.id}`} title="Editar">
                        <FontAwesomeIcon size="lg" icon={faPenToSquare} />
                      </Link>
                    </td>
                    <td>
                      <Link to='/Customers' title="Eliminar" onClick={() => deletefn(client.id)}>
                        <FontAwesomeIcon size="lg" icon={faTrashCan} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ) : 'Sin resultados'
      }

    </>
  )

}
export default Customer