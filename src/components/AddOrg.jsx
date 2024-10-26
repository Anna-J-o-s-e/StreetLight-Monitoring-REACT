import axios from 'axios';
import React, { useState } from 'react';
import NavBarAdmin from './NavBarAdmin';
import './AddOrg.css'; // Import external CSS file

const AddOrg = () => {
    const [data, setdata] = useState({
        oname: "",
        oaddress: "",
        ophone: "",
        oid: "",
        omail: "",
        opassword: "",
        oconfirmpassword: ""
    });

    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const validatePhoneNumber = (phone) => {
        const phonePattern = /^\d{10}$/; // Adjust according to your requirement (10 digits in this case)
        return phonePattern.test(phone);
    };

    const readValue = () => {
        console.log(data);
        if (data.opassword === data.oconfirmpassword) {
            if (!validateEmail(data.omail)) {
                alert("Please enter a valid email address.");
                return;
            }
            if (!validatePhoneNumber(data.ophone)) {
                alert("Please enter a valid phone number (10 digits).");
                return;
            }
            axios.post("http://localhost:8080/organizationsignup", data)
                .then((response) => {
                    console.log(data);
                    if (response.data.status === "success") {
                        alert("Successfully signed up");
                    } else {
                        alert("Error signing up");
                    }
                })
                .catch(error => {
                    console.error("Error during signup:", error);
                    alert("An error occurred while signing up.");
                });
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div className="add-org">
            <NavBarAdmin />
            <center>
                <br />
                <h1>ADD EMPLOYEES</h1>
            
            <div className="container">
                <div className="row">
                    <br />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6">
                            <label className="form-label">Employee Name</label>
                            <input type="text" name='oname' onChange={inputHandler} value={data.oname} className="form-control" placeholder='Enter your name' required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                            <label className="form-label">Employee Email</label>
                            <input type="email" name='omail' onChange={inputHandler} value={data.omail} className="form-control" placeholder='Enter the email address' required />
                        </div>
                        <div className="col col-12 col-md-6">
                            <label className="form-label">Designation</label>
                            <textarea name="oaddress" onChange={inputHandler} value={data.oaddress} className="form-control" placeholder='Enter designation' required></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                            <label className="form-label">Phone No</label>
                            <input type="text" name='ophone' onChange={inputHandler} value={data.ophone} className="form-control" placeholder='Enter phone number' required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" name="opassword" onChange={inputHandler} value={data.opassword} className="form-control" placeholder='Enter your password' required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                            <label className="form-label">Employee ID</label>
                            <input type="text" name="oid" onChange={inputHandler} value={data.oid} className="form-control" placeholder='Enter your employee ID' required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="oconfirmpassword" onChange={inputHandler} value={data.oconfirmpassword} className="form-control" placeholder='Confirm the password' required />
                        </div>
                        <div className="col col-12 col-md-6">
                            <center>
                                <button className="btn btn-warning"  onClick={readValue}>SIGN UP</button>
                            </center>
                        </div>
                        
                    </div>
                    
                </div>
               
            </div>
            <div className="col col-12">
                            <p><a href="/DashboardAdmin" className='link-white'>Back to Admin Dashboard</a></p>
                            <p><a href="/" className='link-white' >Back to Login</a></p>
                        </div>
                        </center>
        </div>
    );
};

export default AddOrg;
