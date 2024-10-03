import axios from 'axios'
import React, { useState } from 'react'

const UserSignUp = () => {
    const [data,setdata]=useState(
        {
            "uname":"",
            "umail":"",
            "uaddress":"",
            "uphone":"",
            "upassword":"",
            "uconfirmpassword":""
        }
    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        if (data.upassword==data.uconfirmpassword) {
            axios.post("http://localhost:8080/usersignup",data).then((response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully signed up")
                } else {
                    alert("error")
                }
            }).catch()
    
        } else {
           alert("password incorrect") 
        }
    }
  return (
    
    <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
            <center>
               
                <br />
                <h1 style={{ color: "white" }}>USER SIGNUP</h1></center>
            <div className="container">
                <div className="row" style={{ color: "white" }}>
                    <br />
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User Name</label>
                            <input type="text" name='uname' onChange={inputHandler} value={data.uname} className="form-control" placeholder='enter your name' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> User Email</label>
                            <input type="text" name='umail' onChange={inputHandler} value={data.umail} className="form-control" placeholder='enter the email address' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="uaddress" id="" onChange={inputHandler} value={data.uaddress} className="form-control" placeholder='enter address'></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" name='uphone' onChange={inputHandler} value={data.uphone} className="form-control" placeholder='enter phone number' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="upassword" id="" onChange={inputHandler} value={data.upassword} className="form-control" placeholder='enter your password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="uconfirmpassword" id="" onChange={inputHandler} value={data.uconfirmpassword} className="form-control" placeholder='confirm the password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-warning" style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px' }} onClick={readValue} >SIGN UP</button></center>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/UserLogin" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to Login</a></p>
                            </div>
                    </div>
                </div>
            </div></div>
  )
}

export default UserSignUp