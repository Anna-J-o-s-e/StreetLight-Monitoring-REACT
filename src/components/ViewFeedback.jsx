import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBarOrg from './NavBarOrg'
import './ViewFeedback.css';

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
    <div className="view-feedback">
           <center> 
            <div>
              <NavBarOrg/>
               <br /> <center><h1>VIEW FEEDBACK</h1></center>
                <br></br>
                
                    <div className="container">
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
                           
                        </div>
                    </div>

                
            </div>
            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                            <p><a href="/DashboardOrg" class="link-white">Back to Staff Dashboard</a></p>
                            <p><a href="/" class="link-white">Back to Login</a></p>
                            </div>
                            </center>
        </div>
  )
}

export default ViewFeedback