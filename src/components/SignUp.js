import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (

            <div className="container">
                <div style={{ marginLeft: "auto", marginRight: "auto" }} className="col-sm-6 border border-light p-5">

                    <form>

                        <p className="h4 mb-4 text-center" style={{ color: "#00cccc" }}>Sign Up</p>

                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="First Name" style={{ height: "50px" }}></input>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="Last Name" style={{ height: "50px" }}></input>
                            </div>
                        </div>


                        <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="Phone" style={{ height: "50px" }}></input>

                        <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="Email" style={{ height: "50px" }}></input>


                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4 border border-primary" placeholder="Password" style={{ height: "50px" }}></input>
                        <p style={{ fontSize: "13px", color: "#848e8e", fontStyle: "italic" }}>Signing up for a E-KYC account means you agree to the Privacy Policy and<br /> Terms of Service.</p>



                        <button className="btn btn-info btn-block my-4" type="submit" style={{ backgroundColor: "#00cccc" }}>Create Account</button>


                        <p>Already Have an account?&nbsp;<a href="" style={{ color: "#00cccc" }}>Login</a></p>







                    </form>
                </div>






            </div>
        )
    }
}

export default SignUp;
