import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBarAdmin from './NavBarAdmin'

const ViewUsers = () => {

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
    <div>
            <NavBarAdmin/>
            <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <center><h1 style={{ color: "white" }}>VIEW USERS</h1></center>
                <br></br>
                <center>
                    <div className="container">
                        <div className="row" style={{ color: "white" }}>
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
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                            <p><a href="/DashboardAdmin" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Admin Dashboard</a></p>
                            <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                            </div>
                        </div>

                    </div>
                </center>


            </div>
        </div>
  )
}

export default ViewUsers