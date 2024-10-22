import React from 'react'
import MainNavBar from './MainNavBar'

const MainDashboard = () => {
  return (
    <div>
        <MainNavBar/>
        <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
        <h1>Welcome to the Smart Street Light Monitoring Dashboard</h1>
            <p>
                Here you can monitor the status of street lights, manage queries, and view feedback. 
                Use the navigation menu to access different functionalities.
            </p>
        </div>
    </div>
  )
}

export default MainDashboard