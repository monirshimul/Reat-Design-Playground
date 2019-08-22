import React, { Component } from 'react'
import ProfilePic from './profile.jpg';
import './css/Welcome.css'
import { Spring } from 'react-spring/renderprops';

export default class Welcome extends Component {
    state = {
        showImageUpload: false
    }


    render() {
        const { showImageUpload } = this.state;
        return (
            <div className="container">

                <div className="d-flex flex-column animated zoomIn" >
                    <div className="d-flex justify-content-center" >
                        <h1><i className="fab fa-weebly" style={{ color: "#56c9ef", fontSize: "50px" }}></i>elcome&nbsp;<i className="fas fa-exclamation" style={{ color: "#56c9ef", fontSize: "30px" }} ></i></h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={ProfilePic}
                            style={{ maxWidth: "15%", cursor: "pointer" }}
                            onClick={() => {


                                this.setState({ showImageUpload: !this.state.showImageUpload })
                            }}
                            className="rounded-circle img-fluid img-thumbnail" id="profilePicture" alt="profilePicture" />

                    </div>
                    <br />

                    {showImageUpload ?
                        <Spring
                            from={{ opacity: 0, marginTop: -50 }}
                            to={{ opacity: 0.8, marginTop: 0 }}
                        >
                            {props => (
                                <div style={props}>
                                    <div className="d-flex justify-content-center">
                                        <div className="card border-primary mb-3">
                                            <div className="card-body d-flex justify-content-between">
                                                <div className="">
                                                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                                                </div>
                                                <div className="">
                                                    <button type="button" style={{ backgroundColor: "#56c9ef" }} className="btn btn-info">Upload</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                        </Spring> : null

                    }


                </div>


            </div>
        )
    }
}
