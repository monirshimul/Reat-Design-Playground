import React, { Component } from 'react'
import Images from './Images';
import ProfilePic from './profile.jpg';
import Elements from './Elements';
import Forms from './Forms';
import TinForm from './TinForm';
import Welcome from './Welcome';
class AllInfo extends Component {
    render() {
        return (
            <div className="container">
                {/* <div className="d-flex align-items-center animated bounceInDown">
                    <div className="col-sm-6" >
                        <Images />
                    </div>

                    <div className="col-sm-6">
                        <nav className="navbar navbar-expand-lg navbar-light">


                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#" style={{ color: "#999", marginRight: "10px" }}>Profile <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "#999", marginRight: "10px" }}>Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "#999", marginRight: "10px" }}>Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "#999", marginRight: "10px" }}>QR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "#999" }}>Logout</a>
                                </li>
                            </ul>

                        </nav>

                    </div>







                    <div className="col-sm-6" >
                        <nav className="navbar navbar-expand-lg">



                        </nav>
                    </div>
                   



                </div> */}

                <br />
                <Welcome />
                <br />


                {/*
                <div className="border-bottom">
                    <h2 style={{ marginLeft: "50px", textAlign: "center", marginLeft: "" }}>Informations&nbsp;
                    <i className="far fa-address-card" style={{ color: "#00cccc" }}> </i>
                    </h2>
                </div>
                */ }


                {/*
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        style={{ width: "35%", backgroundColor: "#00cccc" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>*/}


                <div className="card border-light mb-3 animated bounceInLeft delay-1s col-sm-8" style={{
                    marginLeft: "auto",
                    marginRight: "auto"

                }} >
                    <div className="card-header" style={{ textAlign: "center", backgroundColor: "#33bfaa", color: "#ffffff", height: "40px" }}>
                        <p>Provide your related informations below</p>
                    </div>
                    <div className="card-body">
                        <Forms />
                        <TinForm />
                    </div>
                </div>











            </div>
        )
    }
}
export default AllInfo;
