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
    <div className="containers">
    <div className="container">
   <form onSubmit={onSubmit}>
     
     
     <div >Please make your Payment!</div>
               <div className="row">
                 <div className="col-25">
               <label for="fname" >Full Name </label>
               </div>
               <div className="col-75">
              <input
                type="text"
                id="fname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
              </div>  
              </div>

            <div className= "row">
              <div className="col-25">
              <label for="email" >Email Address</label>
              </div>
              <div className="col-75">
              <input
                className="input"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email adress  ....."
              />
          </div>
          </div>
           
          
          <div className="row">
            <div className="col-25">
              <label  for="phone"> Phone Number</label>
              </div>
              <div className="col-75">
              <input
                className="input"
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone number ....."
              />
            </div>
            </div>
            
              <div className="buttons">
           { isLogin? <PaystackButton className="paystack-button" {...componentProps} /> :<Link to="/login"> please Login to procced</Link>}
            </div>
           

   
   
      </form>

      </div>
      </div>
  )
}

export default Logic