import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './layout/NavBar'
import Contact from './components/contact'
import Customer from './components/customer'
import Home from './components/home'
import Login from './components/login'
import Maintenance from './components/maintenance'
import Mechanical from './components/mechanical'
import Report from './components/report'
import Vehicle from './components/vehicle'
import PageNotFound from './components/pagenotfound';
import { AddCustomer } from './components/addcustomer';
import { EditCustomer } from './components/editcustomer';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='Contacts' element={<Contact />} />
            <Route path='Customers' element={<Customer />} />
            <Route path='Login' element={<Login />} />
            <Route path='Maintenance' element={<Maintenance />} />
            <Route path='Mechanics' element={<Mechanical />} />
            <Route path='Reports' element={<Report />} />
            <Route path='Vehicles' element={<Vehicle />} />
            <Route path='Customer/Add' element={<AddCustomer />} />
            <Route path='Customer/Edit/:idReg' element={<EditCustomer />} />
            <Route path='*' element={<PageNotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
