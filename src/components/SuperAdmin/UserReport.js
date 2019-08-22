import React, { Component } from 'react'

export class UserReport extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="shadow mb-3"
                        style={{ backgroundColor: "#fcfcfc", color: "#8f8e8e", textAlign: "center" }}>
                        <i class="fas fa-box-open"></i>&nbsp;User Archive
                    </div>
                    <div className="row d-flex justify-content-around">

                        <div className="card text-white bg-info mb-3 text-center col-sm-3 shadow">
                            <div className="card-header">Total User</div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <i class="fas fa-users"></i>&nbsp;
                                    586</h4>

                            </div>
                        </div>
                        <div className="card text-white bg-primary text-center mb-3 col-sm-3 shadow" >
                            <div className="card-header">Today User Access</div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <i class="fas fa-globe"></i>&nbsp;
                                    66</h4>

                            </div>
                        </div>
                        <div className="card text-white bg-dark text-center mb-3 col-sm-3 shadow">
                            <div className="card-header">Total Verifications</div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <i class="fas fa-user-check"></i>&nbsp;
                                    1548</h4>

                            </div>
                        </div>
                    </div>
                    <div className="shadow mb-3"
                        style={{ backgroundColor: "#fcfcfc", color: "#8f8e8e", textAlign: "center", marginTop: "50px" }}>
                        <i class="fas fa-skating"></i>&nbsp;Active Users
                    </div>
                    <div className="row">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">User Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">01</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr>
                                    <th scope="row">02</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr>
                                    <th scope="row">03</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr>
                                    <th scope="row">04</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>






                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserReport
