import React, { Component } from 'react';
import UserReport from './UserReport';
import DropDown from '../SuperAdmin/DropDown';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-light shadow" style={{ backgroundColor: "#3ed6a6" }}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand" href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                                <i class="fas fa-user-cog"></i>&nbsp;
                                Admin</a>&nbsp;&nbsp;&nbsp;

                        </div>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav">
                                <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                    <i class="fas fa-home"></i>&nbsp;
                                Home</a>&nbsp;&nbsp;&nbsp;
                                <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                    <i class="fas fa-user"></i>&nbsp;
                                Profile</a>&nbsp;&nbsp;&nbsp;
                                <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                    <i className="fas fa-envelope-open-text"></i>&nbsp;
                                Messages</a>&nbsp;&nbsp;&nbsp;

                            </div>
                            <div class="navbar-nav ml-auto">
                                <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                    <i class="fas fa-user"></i>&nbsp;
                                Welcome, Demo</a>&nbsp;&nbsp;&nbsp;
                                <a href="#" class="nav-item nav-a" style={{ color: "#ffffff", textDecoration: "none" }}>
                                    <i class="fas fa-sign-out-alt"></i>&nbsp;
                                Logout</a>
                            </div>
                        </div>
                    </div>
                </nav>




                <div className="sidebar shadow" style={{ backgroundColor: "#8f8e8e" }}>
                    <a className="active" href="#home"><i className="fas fa-home"></i>&nbsp;&nbsp;Home</a>

                    {/* <a href="#news"><i className="fas fa-newspaper"></i>&nbsp;&nbsp;Create User </a>

                    <a href="#contact"><i className="fas fa-id-badge"></i>&nbsp;&nbsp;Update User
                    </a>
                    <a href="#about"><i className="fas fa-eject"></i>&nbsp;&nbsp;All User
                    </a> */}


                    <DropDown />
                    <DropDown />
                    <DropDown />


                </div>

                <div className="content">


                    <UserReport />



                </div>












            </div>
        )
    }
}

export default Dashboard