import axios from 'axios'
import React, { useState } from 'react'
import NavBarUser from './NavBarUser'

const AddFeedback = () => {

    const [data,setdata]=useState(
        {
            "rating": "",
            "comments": ""
        }
    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})

    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/addfeedback",data).then((response)=>{
            console.log(data)
            if (response.data.status=="success") {
                alert("Feedback submitted successfully")
            } else {
                alert("Error")
            }
        }).catch((error)=>{
            alert(error.message)
        })
    }


  return (
    <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/street-light-k3nf9uqlleox5bwc.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
        <NavBarUser/>
           <br /> <center><h1 style={{ color: "white" }}>ADD FEEDBACK</h1></center><br />
            <div className="container" style={{ color: "white" }}>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                            <label for="" class="form-label">RATING</label>
                                <div className="rating">
                        <input type="radio" id="star1" name="rating" value="1" onChange={inputHandler} />
                        <label htmlFor="star5">★</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="star2" name="rating" value="2" onChange={inputHandler} />
                        <label htmlFor="star4">★</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="star3" name="rating" value="3" onChange={inputHandler} />
                        <label htmlFor="star3">★</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="star4" name="rating" value="4" onChange={inputHandler} />
                        <label htmlFor="star2">★</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="star5" name="rating" value="5" onChange={inputHandler} />
                        <label htmlFor="star1">★</label>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">COMMENTS</label>
                                    <textarea  id="" className="form-control" placeholder="comment here" name="comments" value={data.comments} onChange={inputHandler} ></textarea><br></br>

                                </div>
                                
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    
                                    <button class="btn btn-warning" style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px' }} onClick={readValue}>SUBMIT</button>
                                    
                                </div>
                                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to Login</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddFeedback