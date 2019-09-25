import React, { Component } from 'react';

import ToDo from './components/ToDo';
import Test from './components/Test';
import NavBar from './components/NavBar';
import Table from './components/Table';
import Alert from './components/Alert';
import Login from './components/Login';
import Images from './components/Images';
import SignUp from './components/SignUp';
import AfterLogin from './components/AfterLogin';
import About from './components/About';
import AllInfo from './components/AllInfo';
import ContactInfo from './components/ContactInfo';
import Testing from './components/Testing';
import Forms from './components/Forms';
import AllLogs from './components/AllLogs';
import PropsTest from './components/PropsTest';

import SuperAdminLogin from './components/SuperAdmin/loginAdmin';
import SuperAdminPanel from './components/SuperAdmin/AdminPanel';
import UserAdminLogin from './components/Admin/UserLogin';
import AdminDashboard from './components/SuperAdmin/Dashboard';
import TestComponent from './components/SuperAdmin/TestComponent';
import AdminPanelTest from './components/SuperAdmin/AdminPanelTest';
import Welcome from './components/Welcome';
import NormalUserPanel from './components/Admin/Main';



class App extends Component {
  render() {

    return (
      <div className="App" style={{ backgroundColor: "#fcfcfc", marginBottom: "30px" }} >

        <NormalUserPanel />

      </div>
    )
  }
}









export default App;