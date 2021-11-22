import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import { Link } from "react-router-dom"
import { auth } from "../firebase"
const Logic = () => {
  const publicKey = "pk_test_0aac2527b2e3b4fe2af9d634556ca78e9fc1f230"
  const amount = 100000 *100
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: (res) => {
      setEmail("")
      setName("")
      setPhone("")
      console.log(res)
    },
    onClose: () => alert("Buy now naira is loosing value daily"),
  }

const onSubmit=async (e)=>{
  e.preventDefault()
}
const isLogin=auth.currentUser
  return (
   <form onSubmit={onSubmit}>
     <div className=" mb-3">

       <div className="row">
      
        <div className= "col-25" >
              <label for="exampleInputEmail1"  class="form-label" >Name </label>
              </div>
              <div className= "col-75">
              <input
                type="text"
                id="fname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            </div>


            <div className="row"> 
            <div className= "col-25">
              <label>Email</label></div>
              <div className="col-75">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            </div>
            <div className="row">
              <div className="col-25">
              <label> Phone </label></div>
              <div className="col-75">
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              </div>
            </div>
            
              <div className="buttons">
           { isLogin? <PaystackButton className="paystack-button" {...componentProps} /> :<Link to="/login"> please Login to procced</Link>}
            </div>
            </div>

           
         
   
      </form>
  )
}

export default Logic