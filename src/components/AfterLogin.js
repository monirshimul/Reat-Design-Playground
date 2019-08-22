import React, { Component } from 'react'

class AfterLogin extends Component {
    render() {
        return (

            <div className="container">
                <div style={{
                    marginLeft: "auto",
                    marginRight: "auto"
                }} className="col-sm-6 border border-light p-5">

                    <form className="text-center ">

                        <p className="h2 mb-4" style={{ color: "#00cccc" }}>Congratulations..!</p>
                        <p className="h4 mb-4" style={{ color: "#a09f9f" }}>Please Login</p>


                        <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="Phone" style={{ height: "50px" }}></input>


                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4 border border-primary" placeholder="Password" style={{ height: "50px" }}></input>

                        <div className="d-flex align-items-center justify-content-between">
                            <div>

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"></input>
                                    <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                </div>
                            </div>
                            <div>

                                <a href="" style={{ color: "#00cccc" }}>Forgot password?</a>
                            </div>
                        </div>


                        <button className="btn btn-info btn-block my-4 " type="submit" style={{ backgroundColor: "#00cccc" }}>Sign in</button>


                        <p>Not a member?&nbsp;<a href="" style={{ color: "#00cccc" }}>Register</a></p>







                    </form>
                </div>






            </div>
        )
    }
}

export default AfterLogin;
