import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './StreetlightTable.css';

const ViewStreetlight = () => {

    const [streetlights, setStreetlights] = useState([]);

    // Fetch streetlight data from the backend API
    useEffect(() => {
      const fetchStreetlights = async () => {
        try {
          const response = await axios.get('http://localhost:8080/viewstreetlights');
          setStreetlights(response.data);
        } catch (error) {
          console.error('Error fetching streetlights:', error);
        }
      };
  
      fetchStreetlights();
    }, []);
  // Render status button with conditional colors
  const renderStatusButton = (status) => {
    const isOn = status.toLowerCase() === 'on';
    return (
      <button className={`status-btn ${isOn ? 'status-on' : 'status-off'}`}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    );
  };

    


  return (
    

<div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <h2 style={{ color: "white" }}>Streetlight Status</h2>
      <table className="table table-bordered table-striped" style={{ color: "white" }}>
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
              <td colSpan="5">No streetlight data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>


   
  )
}

export default ViewStreetlight