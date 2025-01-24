import axios from 'axios'
import React, { useState } from 'react'
import NavBarUser from './NavBarUser'
import './ViewReply.css';

const ViewReply = () => {

    const [data, searchData] = useState(
        {
            "replymail": ""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        searchData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Searchreply", data).then((Response) => {
            setResult(Response.data)
        }).catch()
    }

    return (
        <div className="view-reply">
            <NavBarUser/>
            <br /><br />
            <center><h1>SEARCH REPLIES</h1>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col ol-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder='Enter your email id' value={data.replymail} name='replymail' onChange={inputHandler} />
                                </div>
                                <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    
                                    <center><button className="btn btn-warning" onClick={readValue} >SEARCH</button></center>
                                   
                                </div>
                                </center>
                            </div>
                        </center>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL ID</th>
                                    <th scope="col">DATE</th>
                                    <th scope="col">REMARKS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.replyname}</td>
                                                <td>{value.replymail}</td>
                                                <td>{value.replydate}</td>
                                                <td>{value.solution}</td>

                                            </tr>
                                        }
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
                

            </div>
            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p><a href="/" class="link">Back to Login</a></p>
                    <p><a href="/DashboardUser" class="link-">Back to User Dashboard</a></p>
                </div>
                </center>
        </div>
    )
}

export default ViewReply

