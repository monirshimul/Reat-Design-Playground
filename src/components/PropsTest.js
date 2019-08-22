import React, { Component } from 'react'

export class PropsTest extends Component {
    render() {
        return (
            <div className="container">

                <div className="row ">

                    <div className="jumbotron col-sm-12">
                        <h1 className="display-3 lp_hglt_cls_hello,_world! text-center">Hey, {this.props.name}!</h1>
                        <hr className="my-4" />
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <div className=" col" style={{ backgroundColor: "#f7f7f7" }}>

                            <div className="card border-light mb-3 col-sm-3" style={{ maxWidth: "60rem" }}>
                                <div className="card-header">
                                    <h1>Hi, {this.props.name}</h1>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Your Age {this.props.age}
                                    </h4>
                                    <p className="card-text">
                                        Your UserId is {this.props.User.UserId}
                                    </p>
                                </div>
                            </div>


                        </div>
                        <hr className="my-4" />
                        <div className="col" style={{ backgroundColor: "#f7f7f7" }}>


                            <div className="card border-light mb-3 col-sm-3" style={{ maxWidth: "60rem" }}>
                                <div className="card-header">
                                    <h1>Your Hobbies are:</h1>
                                </div>
                                <div className="card-body">
                                    <ul style={{ listStyle: 'none' }}>
                                        {this.props.User.hobbies.map(hobby => <li>{hobby}</li>)}
                                    </ul>
                                </div>
                            </div>



                        </div>
                        <hr className="my-4" />
                    </div>

                </div>
            </div>



        )
    }
}

export default PropsTest;
