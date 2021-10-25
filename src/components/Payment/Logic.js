import React, { useState } from "react"
import { Col } from "react-bootstrap"
import { PaystackButton } from "react-paystack"
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

  
  // const [formValues , setFormValues] = useState  ({
  //   email : '',
  //   amount : 100000000,
  //   phone : '',
  //   name : ''
  // // } )

  // const handleChange  = e => setFormValues({...formValues, [e.target.name]: e.target.value})

const onSubmit=async (e)=>{
  e.preventDefault()
  // const  {data } = await axios.post("https://api.paystack.co/transaction/initialize")
  // console.log(formValues)
}
  return (
   <form onSubmit={onSubmit}>
     <div className="container">

       <div className="row">
      
        <div className= "col-25" >
              <label for="fname" >Name </label>
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
            
              <div className="button">
            <PaystackButton className="paystack-button" {...componentProps} />
            </div>
            </div>

           
         
   
      </form>
  )
}

export default Logic