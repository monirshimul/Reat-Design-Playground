import React, { Component } from 'react'

class ContactInfo extends Component {
    render() {
        return (

            <div className="container">
                <div className="border-bottom">
                    <h5 style={{ marginLeft: "50px" }}>Contacts:</h5>
                </div>
                <div style={{ marginLeft: "auto", marginRight: "auto" }} className="col-sm-6 border border-light p-5">

                    <form>





                        <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="Phone" style={{ height: "50px" }}></input>

                        <input type="text" id="defaultLoginFormNumber" className="form-control mb-4 border border-primary" placeholder="Email" style={{ height: "50px" }}></input>


                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4 border border-primary" placeholder="Password" style={{ height: "50px" }}></input>



                        <button className="btn btn-info btn-block my-4" type="submit" style={{ backgroundColor: "#00cccc" }}>Verify</button>










                    </form>
                </div>






            </div>
        )
    }
}

export default ContactInfo;
