import axios from 'axios'
import React, { useState } from 'react'
import NavBarOrg from './NavBarOrg'
import './ReplyQuery.css';

const ReplyQuery = () => {

  const [data, setdata] = useState(
    {
      "replyname":"",
      "replymail":"",
      "replydate":"",
      "solution":""

    }
)
const inputHandler = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
}

const readValue = () => {
    console.log(data)
    axios.post("http://localhost:8080/addreply", data).then((response) => {
        console.log(data)
        if (response.data.status == "success") {
            alert("Added Successfully")
        } else {
            alert("Error")
        }
    }).catch((error)=>{
        alert(error.message)
      })
}

  return (
    <div className="reply-query">
         <NavBarOrg/>
            <center><h1>ADD REPLY</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">Requestor Name</label>
                                    <input type="text" className="form-control"placeholder='Enter Requestor Name'name='replyname' value={data.replyname} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">Requestor Email</label>
                                    <input type="text" className="form-control"placeholder='Enter Requestor Email'name='replymail' value={data.replymail} onChange={inputHandler}  />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">Date</label>
                                    <input type="date"  id="" className="form-control"placeholder='Enter Date'name='replydate' value={data.replydate} onChange={inputHandler}  />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Remarks</label>
                                    <textarea id="" className="form-control" name='solution' value={data.solution} onChange={inputHandler} ></textarea>
                                </div>
                               
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    
                                <button class="btn btn-warning" onClick={readValue}>ADD REPLY</button>
                                    
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                            <p><a href="/DashboardOrg" class="link-white">Back to Staff Dashboard</a></p>
                            <p><a href="/" class="link-white">Back to Login</a></p>
                            </div>
            </center>
        </div>
  )
}

export default ReplyQuery