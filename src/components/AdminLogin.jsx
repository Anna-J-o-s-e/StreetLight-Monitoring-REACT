import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {

    const [data, setdata] = useState(
        {
            "aname": "",
            "amail": "",
            "apassword": ""
        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/adminlogin", data).then((response) => {
            console.log(data)
            if (response.data.status == "success") {
                sessionStorage.setItem("token", response.data.token)
                sessionStorage.setItem("userId", response.data.userId)
                navigate("/DashboardAdmin")
            } else {
                alert(response.data.status)
            }
        }).catch(
            (error) => {
                console.log(error)
                alert(error)
            }
        )
    }
    let navigate = useNavigate()


    return (

        <div class="admin-login">

            <div>
                <h1>ADMIN LOGIN</h1>
                <div className="container">
                    <div className="row" >
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Admin Email</label>
                                <input type="email" name="amail" onChange={inputHandler} value={data.amail} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Admin Password</label>
                                <input type="password" name="apassword" onChange={inputHandler} value={data.apassword} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning"  onClick={readValue}>LOGIN</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin