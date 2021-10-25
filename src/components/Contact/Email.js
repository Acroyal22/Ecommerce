import React from 'react';

const Email = () => {
  return (
    <div>
     
<section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
   
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    
</section>
<div className="container">
     <div className=" text-center mt-5 ">
      
    </div>
    <div className="row ">
        <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                    <div className="container">
                        <form id="contact-form">
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_name">Firstname *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_need">Please specify your need *</label> <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                <option>Request Invoice for order</option>
                                                <option>Request order status</option>
                                                <option>Haven't received cashback yet</option>
                                                <option>Other</option>
                                            </select> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group"> <label for="form_message">Message *</label> <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                    </div>
                                    <div className="col-md-12"> <input type="submit" className="bttn btn-success btn-send pt-2 btn-block " value="Send Message" /> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</div>
    </div>
  );
}

export default Email;
