import React, { Component } from 'react';
import AdminPanelTest from './AdminPanelTest';


export class TestComponent extends Component {

    render() {

        //console.log(formatted(this.JSX));
        const content = (
            <div style={{ padding: "50px" }}>
                <input type="text"></input>
                <button className="btn btn-info">Mybutton</button>
            </div>
        )
        return (

            <div>
                <AdminPanelTest name={content} />
            </div>

        )
    }
}

export default TestComponent
