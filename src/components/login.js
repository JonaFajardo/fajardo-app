import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  
  let navigate = useNavigate();
  const baseUrl="https://localhost:7155/api/Login";
const cookies = new Cookies();

const [form, setForm]=useState({
  userName:'',
  password: ''
});
  const handleChange=e=>{
 const {name, value} = e.target;
 setForm({
   ...form,
   [name]: value
 });
  }

  const iniciarSesion=async e=>{
    e.preventDefault();
    await axios.get(baseUrl+`/${form.userName}/${md5(form.password)}`)
    .then(response=>{
      return response.data;
    }).then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('id', respuesta.id, {path: '/'});
        cookies.set('nombre', respuesta.name, {path: '/'});
        cookies.set('apellido', respuesta.lastName, {path: '/'});
        cookies.set('username', respuesta.userName, {path: '/'});
        cookies.set('password', respuesta.password, {path: '/'});
        alert("Bienvenido: "+respuesta.name+" "+respuesta.lastName);
        navigate('/');
      }else{
        alert('El usuario o la contraseña no son correctos');
      }
    })
    
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
if(cookies.get('id')){
  navigate('/');
}
  },[]);


  return (
      <div className="containerPrincipal ">
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>
        <div className="containerLogin">
          <h4>Iniciar Sesión</h4> 
          <br />
          <div className="form-group">
            <label>Email</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder='Digite email'
              onChange={e => handleChange(e)}

            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder='Digite clave'
              onChange={e => handleChange(e)}

            />
            <br />
            <button className="btn btn-primary" onClick={e=>iniciarSesion(e)} >Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
