import React, { useEffect, useState } from 'react';
import NavBarUser from './NavBarUser';
import './DashboardUser.css';

const DashboardUser = () => {
  const [userDetails, setUserDetails] = useState(null); // State to hold user details

  useEffect(() => {
    const fetchUserDetails = () => {
      const userId = sessionStorage.getItem("userId");
      const uname = sessionStorage.getItem("uname");
      const umail = sessionStorage.getItem("umail");
      const uaddress = sessionStorage.getItem("uaddress");
      const uphone = sessionStorage.getItem("uphone");
      const utype = sessionStorage.getItem("utype");
      const uadmsno = sessionStorage.getItem("uadmsno");

      if (userId) {
        setUserDetails({
          userId,
          uname,
          umail,
          uaddress,
          uphone,
          utype,
          uadmsno
        });
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="dashboard-user">
      <NavBarUser />
      <div className="dashboard-content">
        <h1>Welcome {userDetails ? userDetails.uname : "User"}   !</h1>
        <br /><br />
        {userDetails ? (
          <div className="user-details">
            <h2>User Details:</h2>
            <p><strong>Name:</strong> {userDetails.uname}</p>
            <p><strong>Email:</strong> {userDetails.umail}</p>
            <p><strong>Address:</strong> {userDetails.uaddress}</p>
            <p><strong>Phone:</strong> {userDetails.uphone}</p>
            <p><strong>Type:</strong> {userDetails.utype}</p>
            <p><strong>Admission No:</strong> {userDetails.uadmsno}</p>
          </div>
        ) : (
          <p>No user details available. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardUser;




