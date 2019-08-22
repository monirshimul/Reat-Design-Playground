import React, { Component } from 'react'

export class DropDown extends Component {
    state = {
        isOpen: false
    };
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    render() {

        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div className="dropdown" onClick={this.toggleOpen}>
                <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                >
                    <i className="fab fa-readme"></i>&nbsp;Reports
                </button>

                <div className={menuClass} aria-labelledby="dropdownMenuButton" style={{ backgroundColor: "#8f8e8e" }}>
                    <a className="dropdown-item" href="#nogo">
                        User Access Log
                    </a>
                    <a className="dropdown-item" href="#nogo">
                        User Update Log
                    </a>
                    <a className="dropdown-item" href="#nogo">
                        User Archive
                    </a>
                </div>
            </div>
        );
    }
}

export default DropDown
