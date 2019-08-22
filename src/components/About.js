import React, { Component } from 'react'

class About extends Component {
    render() {
        return (

            <div className="container">
                <div style={{
                    marginLeft: "auto",
                    marginRight: "auto"
                }} className="col-sm-3">


                    <div className="text-center border border-info mb-4 ">

                        <h4 className="mt-2">E-KYC</h4>
                    </div>

                </div>
                <div style={{
                    marginLeft: "auto",
                    marginRight: "auto"
                }} className="col-sm-7 border border-light">


                    <p style={{ textAlign: "justify", fontSize: "13px", color: "#848e8e" }}>
                        ERA KYC is a consortium driven blockchain based application that provides
                        a single platform for sharing KYC data among customers, government organizations
                        and private institutions such as Banks, NBFI and Telecom Industries.
                        With the help of blockchain technology our solution will provide a verified digital identity
                        platform for individuals which is immutable and non-temper able.
                        The system will also facilitate customers to manage their data without any third-party
                        dependency. Customer identification is a crucial part of every business.
                        Banks and Non-banking financial institutions maintain their customer KYC information
                        for mitigating risk and giving convenient access to their services. But most of the time
                        different institutions maintain different identity information for a single customer and
                        the information’s are vastly unsynchronized.Repetitive verification and lack of reuse
                        of information is also costly and time consuming. Therefore, a centralized KYC platform
                        where person’s verified identity information’s can be reused among government and non-government
                        institutions is crucial. Such a system can reduce time and cost for organizations and give
                        customers control over their information.
                    </p>
                    <button className="btn btn-info btn-block my-4" type="submit" style={{ backgroundColor: "#00cccc" }}>Create Account</button>

                </div>






            </div>
        )
    }
}

export default About;
