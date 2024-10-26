import axios from 'axios'
import React, { useState } from 'react'
import NavBarUser from './NavBarUser'
import './AddQuery.css';

const AddQuery = () => {

    const [data,setdata]=useState(
        {
            "rname":"",
            "rmail":"",
            "rdate":"",
            "rtype":"",
            "query":""
        }
    )
const inputHandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/addqueries",data).then((response)=>{
        console.log(data)
        if (response.data.status=="success") {
            alert("Query submitted successfully")
        } else {
            alert("Error")
        }
    }).catch((error)=>{
        alert(error.message)
    })
}


  return (
    <div className="add-query">
           <NavBarUser/>
           <br />
            <center><h1>ADD QUERY</h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">NAME</label>
                                    <input type="text" className="form-control"placeholder='Enter Name'name='rname' value={data.rname} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">EMAIL ID</label>
                                    <input type="text" className="form-control"placeholder='Enter Email id'name='rmail' value={data.rmail} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">DATE</label>
                                    <input type="date"  id="" className="form-control"placeholder='Enter Date'name='rdate' value={data.rdate} onChange={inputHandler}  />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">QUERY TYPE</label>
                                    <select name="rtype" id="" className="form-control" placeholder="select the type" value={data.rtype} onChange={inputHandler}>
                                        <option value="">Select one</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="Query">Query</option>
                                    </select>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">MENTION QUERY/COMPLAINT</label>
                                    <textarea  id="" className="form-control"placeholder='state the concern'name='query' value={data.query} onChange={inputHandler} ></textarea><br></br>

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    
                                    <button class="btn btn-warning" onClick={readValue}>SUBMIT</button>
                                    
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/" class="link">Back to Login</a></p>
                            <p><a href="/DashboardUser" class="link">Back to User Dashboard</a></p>
                            </div>
                            </center>
        </div>
  )
}

export default AddQuery