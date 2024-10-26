import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBarUser from './NavBarUser';
import './StreetlightTable.css';
import './ViewStreetlightUser.css';

const ViewStreetlightUser = () => {
    const [streetlights, setStreetlights] = useState([]);

    // Fetch streetlight data from the backend API
    useEffect(() => {
        const fetchStreetlights = async () => {
            try {
                const response = await axios.get('http://localhost:8080/viewstreetlights');
                console.log(response.data); // Log the response for debugging
                setStreetlights(response.data);
            } catch (error) {
                console.error('Error fetching streetlights:', error);
            }
        };

        // Call the function to fetch data
        fetchStreetlights();

        // Set an interval to refresh the data every 10 seconds
        const intervalId = setInterval(fetchStreetlights, 10000); // 10000 ms = 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Render status button with conditional colors
    const renderStatusButton = (status) => {
        // Check if status is defined; default to "OFF" if undefined
        const isOn = (status && status.toLowerCase() === 'on');
        return (
            <button className={`status-btn ${isOn ? 'status-on' : 'status-off'}`}>
                {isOn ? 'ON' : 'OFF'}
            </button>
        );
    };

    return (
        <div className='viewstrretlight-user'>
            <NavBarUser />
            <h2>NIGGHT-LIGHT STATUS</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Streetlight Number</th>
                        <th>Location</th>
                        <th>Live Status</th>
                    </tr>
                </thead>
                <tbody>
                    {streetlights.length > 0 ? (
                        streetlights.map((streetlight) => (
                            <tr key={streetlight.id}>
                                <td>{streetlight.id}</td>
                                <td>{streetlight.location}</td>
                                <td>{renderStatusButton(streetlight.status)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No streetlight data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                <p>
                    <a href="/DashboardUser" className="link">Back to User Dashboard</a>
                </p>
                <p>
                    <a href="/" className="link">Back to Login</a>
                </p>
            </div>
        </div>
    );
}

export default ViewStreetlightUser;
