import React, { Component } from 'react'

class Alert extends Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h1 id="forms">Alert</h1>
                </div>
                <div className="alert alert-dismissible alert-info">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
                </div>
            </div>

        )
    }
}

export default Alert;
