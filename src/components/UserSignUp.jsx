import axios from 'axios';
import React, { useState } from 'react';
import './UserSignUp.css';

const UserSignUp = () => {
    const [data, setdata] = useState({
        uname: "",
        umail: "",
        uaddress: "",
        uphone: "",
        utype: "",
        uadmsno: "",
        upassword: "",
        uconfirmpassword: ""
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

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        return passwordPattern.test(password);
    };

    const readValue = () => {
        console.log(data);
        if (data.upassword !== data.uconfirmpassword) {
            alert("Passwords do not match");
            return;
        }
        if (!validateEmail(data.umail)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!validatePhoneNumber(data.uphone)) {
            alert("Please enter a valid phone number (10 digits).");
            return;
        }
        if (!validatePassword(data.upassword)) {
            alert("Password must be at least 6 characters long, contain one uppercase letter, and one special character.");
            return;
        }
        
        axios.post("http://localhost:8080/usersignup", data)
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
    };

    return (
        <div className="user-signup">
            <center>
                <br />
                <h1>STUDENT / FACULTY SIGNUP</h1>
                <div className="container">
                    <div className="row">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Name</label>
                                <input type="text" name='uname' onChange={inputHandler} value={data.uname} className="form-control" placeholder='Enter your name' required />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">User Email</label>
                                <input type="email" name='umail' onChange={inputHandler} value={data.umail} className="form-control" placeholder='Enter the email address' required />
                            </div>
                            <div className="col col-12 col-md-6">
                                <label className="form-label">Address</label>
                                <textarea name="uaddress" onChange={inputHandler} value={data.uaddress} className="form-control" placeholder='Enter address' required></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Phone No</label>
                                <input type="text" name='uphone' onChange={inputHandler} value={data.uphone} className="form-control" placeholder='Enter phone number' required />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Category</label>
                                <select name="utype" className="form-control" value={data.utype} onChange={inputHandler} required>
                                    <option value="">Select one</option>
                                    <option value="student">Student</option>
                                    <option value="faculty">Faculty</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Password</label>
                                <input type="password" name="upassword" onChange={inputHandler} value={data.upassword} className="form-control" placeholder='Enter your password' required />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Admission Number / Employee ID</label>
                                <input type="text" name="uadmsno" onChange={inputHandler} value={data.uadmsno} className="form-control" placeholder='Enter your employee ID/admission number' required />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" name="uconfirmpassword" onChange={inputHandler} value={data.uconfirmpassword} className="form-control" placeholder='Confirm the password' required />
                            </div>
                            <div className="col col-12 col-md-6">
                                <center>
                                    <button className="btn btn-warning" onClick={readValue}>SIGN UP</button>
                                </center>
                            </div>
                            <div className="col col-12">
                                <p><a href="/UserLogin" className="link">Click to Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default UserSignUp;
