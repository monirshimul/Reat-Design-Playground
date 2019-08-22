import React, { Component } from 'react';

import DatePicker from './dayPickerInput';
import { Spring } from 'react-spring/renderprops';



class TinForm extends Component {
    state = {
        showForm: false
    }




    render() {
        const { showForm } = this.state;
        return (

            <div className="container">
                <div style={{
                    marginLeft: "auto",
                    marginRight: "auto"

                }} className="">


                    <button type="submit" onClick={() => {


                        this.setState({ showForm: !this.state.showForm })
                    }}
                        className="btn btn-primary btn-block" style={{ backgroundColor: "#fff", color: "#999" }}>

                        TIN Informations &nbsp; &nbsp; &nbsp; <i className="fas fa-caret-down" style={{ color: "#33bfaa" }}></i>
                    </button>
                    <br />

                    {showForm ?

                        <Spring
                            from={{ opacity: 0, marginTop: -50 }}
                            to={{ opacity: 1, marginTop: 0 }}
                        >
                            {props => (
                                <div style={props}>



                                    <div className="card border-light mb-3">
                                        <div className="card-header"
                                            style={{ textAlign: "center", backgroundColor: "#33bfaa", color: "#ffffff" }}>
                                            Provide Your Taxpayer Identification Number Informations
                                        </div>
                                        <div className="card-body" >
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="email">Name:</label>
                                                    <input type="text" className="form-control" id="email" style={{ color: "#b7bfbd" }}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pwd">Registration No:</label>
                                                    <input type="text" className="form-control" id="pwd" style={{ color: "#b7bfbd" }}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Zone:</label>
                                                    <input type="text" className="form-control" id="email" style={{ color: "#b7bfbd" }}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pwd">Status:</label>
                                                    <input type="text" className="form-control" id="pwd" style={{ color: "#b7bfbd" }}></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pwd">Date:</label>
                                                    <DatePicker />
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="pwd">TIN No:</label>
                                                    <input type="text" className="form-control" id="pwd"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pwd">Previous TIN No:</label>
                                                    <input type="text" className="form-control" id="pwd"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pwd">Circle:</label>
                                                    <input type="text" className="form-control" id="pwd"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="pwd">Date of Registration:</label>
                                                    <input type="text" className="form-control" id="pwd"></input>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleTextarea">Present Address</label>
                                                    <textarea class="form-control" id="exampleTextarea" rows="3" spellcheck="false"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleTextarea">Permanent Address</label>
                                                    <textarea class="form-control" id="exampleTextarea" rows="3" spellcheck="false"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputFile">Provide TIN Image</label>
                                                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                                                    <br />
                                                    <small id="fileHelp" className="form-text text-muted" >
                                                        <i style={{ color: "#33bfaa" }} className="fas fa-exclamation-circle"></i>&nbsp;
                                                Before submitting form, please check all your provided information again.</small>
                                                </div>


                                                <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: "#33bfaa" }}>Submit</button>
                                                <br />
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Spring> : null}








                </div>






            </div >
        )
    }
}

export default TinForm;
