import React, { Component } from 'react'
import Welcome from '../Welcome';
import Forms from '../Forms';
import TinForm from '../TinForm';


export class welcomeAdmin extends Component {
    render() {
        return (
            <div className="container">


                <br />
                <Welcome />
                <br />




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

export default welcomeAdmin
