import React, { Component } from 'react'

export class loginAdmin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-light shadow" style={{ backgroundColor: "#3ed6a6" }}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand" href="#" style={{ color: "#ffffff" }}>
                                <i class="fas fa-user-cog"></i>&nbsp;
                                AdminStrap</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">

                        </div>
                    </div>
                </nav>


                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="panel panel-default">
                                    <div class="panel-body text-center pt-5">
                                        <h4 style={{ color: "#72726f" }}>
                                            <i class="fas fa-user-shield"></i>&nbsp;
                                            Account Login</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <section id="main">
                    <div className="container">
                        <div style={{
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} className="col-sm-6 border border-light p-5">

                            <form className="text-center ">




                                <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="User ID" style={{ height: "50px" }}></input>


                                <input type="password" id="defaultLoginFormPassword" className="form-control mb-4 border border-primary" placeholder="Password" style={{ height: "50px" }}></input>

                                <div className="d-flex align-items-center justify-content-between">
                                    <div>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"></input>
                                            <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>

                                        <a href="" style={{ color: "#3ed6a6" }}>Forgot password?</a>
                                    </div>
                                </div>


                                <button className="btn btn-info btn-block my-4" type="submit" style={{ backgroundColor: "#3ed6a6" }}>Login</button>



                            </form>
                        </div>
                    </div>
                </section>





            </div>
        )
    }
}

export default loginAdmin
