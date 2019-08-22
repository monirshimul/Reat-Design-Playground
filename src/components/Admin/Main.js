import React, { Component } from 'react';
import EcForm from './ECForm';
import Welcome from '../../components/Welcome';
import '../../components/css/userSidebar.css';


export class Main extends Component {
    render() {
        return (
            <div>


                <nav className="navbar fixed-top navbar-expand-md navbar-light shadow" style={{ backgroundColor: "#56c9ef" }}>
                    <a href="#" className="navbar-brand" style={{ color: "#ffffff" }} >
                        <i className="fab fa-bandcamp" ></i>&nbsp;&nbsp;
                        Brand</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link" style={{ color: "#ffffff" }}>
                                <i className="fas fa-home"></i>&nbsp;
                                Home</a>
                            <a href="#" className="nav-item nav-link" style={{ color: "#ffffff" }}>
                                <i className="fas fa-user"></i>&nbsp;
                                Profile</a>
                            <a href="#" className="nav-item nav-link" style={{ color: "#ffffff" }}>
                                <i className="fas fa-envelope-open-text"></i>&nbsp;
                                Messages</a>
                            <a href="#" className="nav-item nav-link" style={{ color: "#ffffff" }} tabindex="-1">
                                <i className="fab fa-readme"></i>&nbsp;
                                Reports</a>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <a href="#" className="nav-item nav-link" style={{ color: "#ffffff" }}>
                                <i className="fas fa-user"></i>&nbsp;
                                Welcome, Demo</a>
                            <a href="#" className="nav-item nav-link" style={{ color: "#ffffff" }}>
                                <i className="fas fa-sign-out-alt"></i>&nbsp;
                                Logout</a>
                        </div>
                    </div>
                </nav>





                <div className="sidebar shadow" style={{ backgroundColor: "#8f8e8e" }}>
                    <a className="active" href="#home"><i class="fas fa-home"></i>&nbsp;&nbsp;Home</a>

                    <a href="#news"><i class="fas fa-newspaper"></i>&nbsp;&nbsp;Create User </a>

                    <a href="#contact"><i class="fas fa-id-badge"></i>&nbsp;&nbsp;Update User
                    </a>
                    <a href="#about"><i class="fas fa-eject"></i>&nbsp;&nbsp;All User
                    </a>
                    <a href="#" class="nav-item nav-a" style={{ color: "#ffffff" }} tabindex="-1">
                        <i className="fab fa-readme"></i>&nbsp;
                                Reports</a>

                </div>

                <div className="content">
                    <div className="row ">

                        <Welcome />
                        <br />
                        <EcForm />

                    </div>
                </div>




            </div>
        )
    }
}

export default Main
