import React, { Component } from 'react'
import logo from './logo.PNG';

class Images extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <img src={logo} className="img-fluid" alt="Responsive image" />
                </div>

            </div>
        )
    }
}

export default Images;
