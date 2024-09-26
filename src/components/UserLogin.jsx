import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import NavBarUser from './NavBarUser'
import MainNavBar from './MainNavBar'

const UserLogin = () => {
  const [data,setdata]=useState(
  {
    "umail":"",
    "upassword":""
  }
)
const inputHandler=(event)=>{
  setdata({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
  console.log(data)
  axios.post("http://localhost:8080/userlogin",data).then((response)=>{
    console.log(data)
    if (response.data.status=="success") {
      sessionStorage.setItem("token",response.data.token)
      sessionStorage.setItem("userId",response.data.userId)
      navigate("/DashboardUser")
    } else {
      alert(response.data.status)
    }
  }).catch(
    (error)=>{
      console.log(error)
      alert(error)
    }
  )
}
let navigate=useNavigate()


  return (
    <div>
            
            <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
                <center><h1 style={{ color: "white" }}>USER LOGIN</h1></center>
                <div className="container">
                    <div className="row" style={{ color: "white" }}>
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Email</label>
                                <input type="email" name="umail" onChange={inputHandler} value={data.umail} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your email' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Password</label>
                                <input type="password" name="upassword" onChange={inputHandler} value={data.upassword} id="" className="form-control" style={{ width: '50%', height: '50%' }} placeholder='enter your password' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>LOGIN</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/UserSignUp" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to SignUp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserLogin