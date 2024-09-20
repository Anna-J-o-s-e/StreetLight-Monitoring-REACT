import axios from 'axios'
import React, { useState } from 'react'

const UserSignUp = () => {
    const [data,setdata]=useState(
        {
            "uname":"",
            "umail":"",
            "uaddress":"",
            "uphone":"",
            "upassword":"",
            "uconfirmpassword":""
        }
    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        if (data.upassword==data.uconfirmpassword) {
            axios.post("http://localhost:8080/usersignup",data).then((response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully signed up")
                } else {
                    alert("error")
                }
            }).catch()
    
        } else {
           alert("password incorrect") 
        }
    }
  return (
    <div>UserSignUp</div>
  )
}

export default UserSignUp