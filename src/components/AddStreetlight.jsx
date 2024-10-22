import axios from 'axios'
import React, { useState } from 'react'
import NavBarOrg from './NavBarOrg'

const AddStreetlight = () => {

    const [data, setdata] = useState(
        {
            "id": "",
    "thingspeakChannelId": "",
    "status": "",
    "location":"",
    "date": ""

        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        if (data.opassword == data.oconfirmpassword) {
            axios.post("http://localhost:8080/addstreetlights", data).then((response) => {
                console.log(data)
                if (response.data.status == "success") {
                    alert("Successfully added night-light")
                } else {
                    alert("error")
                }
            }).catch()

        } else {
            alert("error")
        }
    }

  return (
    <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
    <NavBarOrg/>
     <center>
        
         <br />
         <h1 style={{ color: "white" }}>ADD NIGHT-LIGHTS</h1></center>
     <div className="container">
         <div className="row" style={{ color: "white" }}>
             <br />
             <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
             <div className="row g-3">
                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <label htmlFor="" className="form-label">Night-Light Id</label>
                     <input type="text" name='id' onChange={inputHandler} value={data.id} className="form-control" placeholder='enter the id' />
                 </div>
                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <label htmlFor="" className="form-label">Thingspeak Channel Id</label>
                     <input type="text" name='thingspeakChannelId' onChange={inputHandler} value={data.thingspeakChannelId} className="form-control" placeholder='enterchannel id' />
                 </div>
                 <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <label htmlFor="" className="form-label">Status</label>
                     <select name="status" id="" className="form-control" placeholder="select Status" value={data.status} onChange={inputHandler}>
                                        <option value="">Select one</option>
                                        <option value="on">ON</option>
                                        <option value="off">OFF</option>
                                    </select>
                 </div>
                 <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Location</label>
                            <textarea name="location" id="" onChange={inputHandler} value={data.location} className="form-control" placeholder='enter location'></textarea>
                        </div>
                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">Date</label>
                                    <input type="date"  id="" className="form-control"placeholder='Enter Date'name='date' value={data.date} onChange={inputHandler}  />
                                </div>
                 
                 
                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <center><button className="btn btn-warning" style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px' }} onClick={readValue} >ADD NIGHT-LIGHT</button></center>
                 </div>
                 <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                     
                     <p><a href="/DashboardOrg" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Staff Dashboard</a></p>
                     <p><a href="/" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                     </div>
                 
             </div>
         </div>
     </div></div>
  )
}

export default AddStreetlight