import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './layout/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Customer from './components/Customer'
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import Login from './components/Login'
import Report from './components/Report'

function App(props) {
  console.log(props)
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>


            <Route index element={<Home />} />
            <Route path='Contacts' element={<Contact />} />
            <Route path='Login' element={<Login />} />

            <Route path='Customers' element={<Customer />} />
            <Route path='Customer/Add' element={<AddCustomer />} />
            <Route path='Customer/Edit/:idReg' element={<EditCustomer />} />
            <Route path='Reports' element={<Report />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
