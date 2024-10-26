// UserLogin.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the CSS file

const UserLogin = () => {
  const [data, setData] = useState({
    umail: "",
    upassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    if (!data.umail || !data.upassword) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError("");

    axios.post("http://localhost:8080/userlogin", data)
      .then((response) => {
        setLoading(false);
        if (response.data.status === "success") {
          // Store additional user details in sessionStorage
          sessionStorage.setItem("userId", response.data.userId);
          sessionStorage.setItem("uname", response.data.uname);
          sessionStorage.setItem("umail", response.data.umail);
          sessionStorage.setItem("uaddress", response.data.uaddress);
          sessionStorage.setItem("uphone", response.data.uphone);
          sessionStorage.setItem("utype", response.data.utype);
          sessionStorage.setItem("uadmsno", response.data.uadmsno);

          navigate("/DashboardUser");
        } else {
          setError(response.data.status);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setError("An error occurred during login. Please try again.");
      });
  };

  return (
    <div className="admin-login">
      <div>
        <center><h1>STUDENT / FACULTY LOGIN</h1></center>
        <div className="container">
          <div className="row g-3">
            <div className="col col-12">
              <label className="form-label">Student/Faculty Email</label>
              <input
                type="email"
                name="umail"
                onChange={inputHandler}
                value={data.umail}
                className="form-control"
                placeholder='Enter your email'
              />
            </div>
            <div className="col col-12">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="upassword"
                onChange={inputHandler}
                value={data.upassword}
                className="form-control"
                placeholder='Enter your password'
              />
            </div>
            <div className="col col-12">
              <button className="btn btn-warning" onClick={readValue} disabled={loading}>
                {loading ? "Logging in..." : "LOGIN"}
              </button>
            </div>
            <div className="col col-12">
              {error && <div className="alert alert-danger">{error}</div>}
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
  );
};

export default UserLogin;

