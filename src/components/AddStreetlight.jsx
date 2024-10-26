import axios from 'axios';
import React, { useState } from 'react';
import NavBarOrg from './NavBarOrg';
import './AddStreetlight.css';

const AddStreetlight = () => {
    const [data, setdata] = useState({
        "id": "",
        "fname": "",                     // Added 'fname' field
        "thingspeakChannelId": "",
        "status": "",
        "location": "",
        "date": ""
    });

    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8080/addstreetlights", data)
            .then((response) => {
                console.log(data);
                if (response.data.status === "success") {
                    alert("Successfully added night-light");
                } else {
                    alert("Error");
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
                alert("Error occurred while adding night-light");
            });
    };

    return (
        <div className="add-streetlight">
            <NavBarOrg />
            <center>
                <br />
                <h1>ADD NIGHT-LIGHTS</h1>
                <div className="container">
                    <div className="row">
                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Night-Light Id</label>
                                <input type="text" name='id' onChange={inputHandler} value={data.id} className="form-control" placeholder='Enter the ID' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Field Name</label>  {/* Added label for fname */}
                                <input type="text" name='fname' onChange={inputHandler} value={data.fname} className="form-control" placeholder='Enter first name' /> {/* Input for fname */}
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Thingspeak Channel Id</label>
                                <input type="text" name='thingspeakChannelId' onChange={inputHandler} value={data.thingspeakChannelId} className="form-control" placeholder='Enter channel ID' />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Status</label>
                                <select name="status" className="form-control" value={data.status} onChange={inputHandler}>
                                    <option value="">Select one</option>
                                    <option value="on">ON</option>
                                    <option value="off">OFF</option>
                                </select>
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Location</label>
                                <textarea name="location" onChange={inputHandler} value={data.location} className="form-control" placeholder='Enter location'></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Date</label>
                                <input type="date" name='date' className="form-control" value={data.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <center>
                                    <button className="btn btn-warning" onClick={readValue}>ADD NIGHT-LIGHT</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                        <p><a href="/DashboardOrg" className="link-white">Back to Staff Dashboard</a></p>
                        <p><a href="/" className="link-white">Back to Login</a></p>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default AddStreetlight;
