import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBarOrg from './NavBarOrg'

const ViewFeedback = () => {
    const [todos,changeTodos]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/viewfeedback").then(
            (response)=>{
                changeTodos(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{ fetchData() },[])
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
                                            <th scope="col">RATING</th>
                                            <th scope="col">COMMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.rating}</th>
                                                        <td>{value.comments}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                            <p><a href="/DashboardUser" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Organization Dashboard</a></p>
                            <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                            </div>
                        </div>
                    </div>

                </center>
            </div>
        </div>
  )
}

export default ViewFeedback