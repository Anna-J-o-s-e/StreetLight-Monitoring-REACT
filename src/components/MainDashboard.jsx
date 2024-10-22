import React from 'react'
import MainNavBar from './MainNavBar'
import './MainDashboard.css'; // Import the CSS file

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
    <MainNavBar/>
    <div className="ribbon">
<h2>Welcome to the Smart Street Light Monitoring Dashboard</h2>
</div>
    <div>
  
      <img src='https://careermudhra.com/wp-content/uploads/federal-institute-of-science-and-technology-fisat-ernakulam-jpg.webp' alt="College" className="college-image"/>
    
    <h1>Federal Institute of Science And Technology (FISAT)® <br />Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577</h1>
    
        <p>
            Here you can monitor the status of street lights, manage queries, and view feedback. Use the navigation menu to access different functionalities.
        </p>
    </div>
</div>
  )
}

export default MainDashboard