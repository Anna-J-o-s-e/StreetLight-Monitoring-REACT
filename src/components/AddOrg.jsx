import axios from 'axios'
import React, { useState } from 'react'
import NavBarAdmin from './NavBarAdmin'

const AddOrg = () => {

    const [data, setdata] = useState(
        {
            "oname": "",
            "oaddress": "",
            "ophone": "",
            "oid":"",
            "omail": "",
            "opassword": "",
            "oconfirmpassword":""
        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        if (data.opassword == data.oconfirmpassword) {
            axios.post("http://localhost:8080/organizationsignup", data).then((response) => {
                console.log(data)
                if (response.data.status == "success") {
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
           <NavBarAdmin/>
            <center>
               
                <br />
                <h1 style={{ color: "white" }}>ADD EMPLOYEES</h1></center>
            <div className="container">
                <div className="row" style={{ color: "white" }}>
                    <br />
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Employee Name</label>
                            <input type="text" name='oname' onChange={inputHandler} value={data.oname} className="form-control" placeholder='enter your name' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> Employee Email</label>
                            <input type="text" name='omail' onChange={inputHandler} value={data.omail} className="form-control" placeholder='enter the email address' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Designation</label>
                            <textarea name="oaddress" id="" onChange={inputHandler} value={data.oaddress} className="form-control" placeholder='enter address'></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" name='ophone' onChange={inputHandler} value={data.ophone} className="form-control" placeholder='enter phone number' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="opassword" id="" onChange={inputHandler} value={data.opassword} className="form-control" placeholder='enter your password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Employee Id</label>
                            <input type="password" name="oid" id="" onChange={inputHandler} value={data.oid} className="form-control" placeholder='enter your password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="oconfirmpassword" id="" onChange={inputHandler} value={data.oconfirmpassword} className="form-control" placeholder='confirm the password' />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-warning" style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px' }} onClick={readValue} >SIGN UP</button></center>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                            <p><a href="/DashboardAdmin" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Admin Dashboard</a></p>
                            <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                            </div>
                        
                    </div>
                </div>
            </div></div>
    )
}

export default AddOrg