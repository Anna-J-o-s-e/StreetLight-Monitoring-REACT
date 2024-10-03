import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBarOrg from './NavBarOrg'

const ViewQuery = () => {
    const [todos,changeTodos]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/viewqueries").then(
            (response)=>{
                changeTodos(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
          
            <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
             <NavBarOrg/>
               <br /> <center><h1 style={{ color: "white" }}>VIEW FEEDBACK</h1></center>
                <br></br>
                <center>
                    <div className="container" style={{ color: "white" }}>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">EMAIL-ID</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">CATEGORY</th>
                                            <th scope="col">CONCERN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.rname}</th>
                                                        <td>{value.rmail}</td>
                                                        <td>{value.rdate}</td>
                                                        <td>{value.rtype}</td>
                                                        <td>{value.query}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <p><a href="/DashboardOrg" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Organization Dashboard</a></p>
                                <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                            </div>
                        </div>
                    </div>

                </center>
            </div>
        </div>
  )
}

export default ViewQuery