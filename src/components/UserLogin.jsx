import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './AdminLogin.css'; // Import the CSS file

const UserLogin = () => {
  const [data, setdata] = useState(
    {
      "umail": "",
      "upassword": ""
    }
  )
  const inputHandler = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }
  const readValue = () => {
    console.log(data)
    axios.post("http://localhost:8080/userlogin", data).then((response) => {
      console.log(data)
      if (response.data.status == "success") {
        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("userId", response.data.userId)
        navigate("/DashboardUser")
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
        <center><h1>STUDENT / FACULTY LOGIN</h1></center>
        <div className="container">
          <div className="row">
            <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Student/Faculty Email</label>
                <input type="email" name="umail" onChange={inputHandler} value={data.umail} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email' />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="upassword" onChange={inputHandler} value={data.upassword} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password' />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-warning" onClick={readValue}>LOGIN</button>
              </div>
              <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
    <p style={{ display: 'inline-block', margin: '0' }}>
        <a href="/UserSignUp" className="link-warning text-decoration-none" style={{ whiteSpace: 'nowrap' }}>
            Don't have an account? Click to Create
        </a>
    </p>
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin