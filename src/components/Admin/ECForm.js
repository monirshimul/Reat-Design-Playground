import React, { Component } from 'react';
import DatePicker from '../dayPickerInput';


export class ECForm extends Component {
    render() {
        return (
            <div className="container" style={{ backgroundColor: "#f7f7f7" }}>
                <div className="d-flex align-items-center card border-light mb-3" style={{ backgroundColor: "#f7f7f7" }}>
                    <div className="col-sm-5 shadow p-3 mb-2"
                        style={{ backgroundColor: "#56c9ef", color: "#fff", textAlign: "center", marginTop: "15px" }}>
                        <i class="fas fa-certificate"></i>&nbsp;Verify Customer's NID
                                        </div>
                    <div className="card-body" >
                        <form>

                            <div className="form-group">

                                <input type="text" className="form-control" id="name" placeholder="Customer's Name" style={{ color: "#b7bfbd" }}></input>
                            </div>




                            <div className="form-group">

                                <input type="text" className="form-control" id="nid" placeholder="Customer's NID No."></input>
                            </div>

                            <div className="form-group d-flex justify-content-between">
                                <div className="">
                                    <label htmlFor="dob">Date of Birth:</label>
                                </div>
                                <div className="">
                                    <DatePicker />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-block shadow" style={{ backgroundColor: "#8f8e8e", color: "#fff" }}>
                                <i class="fas fa-fingerprint"></i>&nbsp;
                                Provide Customer's Finger</button>
                            <br />


                            <div className="form-group">

                                <input type="text" className="form-control" id="fatherName" placeholder="Father Name" style={{ color: "#b7bfbd" }}></input>
                            </div>
                            <div className="form-group">

                                <input type="text" className="form-control" id="motherName" placeholder="Mother Name" style={{ color: "#b7bfbd" }}></input>
                            </div>
                            <div className="form-group">

                                <input type="text" className="form-control" id="pob" placeholder="Place Of Birth" style={{ color: "#b7bfbd" }}></input>
                            </div>
                            <div className="form-group">


                                <select className="custom-select">
                                    <option value="">Blood Group</option>
                                    <option value="">A+</option>
                                    <option value="1">AB+</option>
                                    <option value="2">A-</option>
                                    <option value="3">B+</option>
                                    <option value="3">B-</option>
                                </select>


                            </div>

                            <div className="form-group">

                                <input type="text" className="form-control" id="issueDate" placeholder="NID Issue Date (YYYY-M-D)"></input>
                            </div>

                            <div class="form-group">

                                <textarea class="form-control" id="address" rows="3" placeholder="Address" spellcheck="false"></textarea>
                            </div>



                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Provide NID Image</label>
                                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>

                            </div>


                            <br />

                            {/* <div className="form-group">
                                <label htmlFor="exampleInputFile">Provide NID Image</label>
                                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                                <br />

                            </div> */}
                            <small id="fileHelp" className="form-text text-muted" >
                                <i style={{ color: "#56c9ef" }} className="fas fa-exclamation-circle"></i>&nbsp;
                                                Before submitting form, please check all your provided information again.
                            </small>
                            <br />


                            <button type="submit" className="btn btn-block shadow" style={{ backgroundColor: "#56c9ef", color: "#fff" }}>
                                <i class="fas fa-check-circle"></i>&nbsp;
                                Submit</button>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ECForm;
