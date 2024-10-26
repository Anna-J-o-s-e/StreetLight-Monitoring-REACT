import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBarOrg from './NavBarOrg'
import './ViewUsersOrg.css';

const ViewUsersOrg = () => {

    const [todos, changeTodos] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/viewusers").then(
            (response) => {
                changeTodos(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])


  return (
    
    <div className="viewusers-org">
        <center>
            <NavBarOrg/>
            <div>
                <h1>VIEW USERS</h1>
                <br></br>
                
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">USER NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">PHONE</th>
                                            <th scope="col">CATEGORY</th>
                                            <th scope="col">ADMISSION NO. / EMPLOYEE ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.uname}</th>
                                                        <td>{value.umail}</td>
                                                        <td>{value.uaddress}</td>
                                                        <td>{value.uphone}</td>
                                                        <td>{value.utype}</td>
                                                        <td>{value.uadmsno}</td>
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

export default ViewUsersOrg