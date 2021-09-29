import React from 'react';
import support from "../images/support.png";
import money from "../images/money back.png"
import transport from "../images/free.png";


const Service = () => {
  return (
    <div>
       <div className="card-group" style={{ marginTop: "80px" ,marginLeft:"10px",marginRight:"10px"}}>
          <div className="card">
            <img
              className="card-img-top"
              src={transport}
              alt="Card cap"
              style={{ width: "70px", marginLeft: "50%", marginTop: "10%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ marginLeft: "30%" }}>
                {" "}
                FREE SHIPPING.
              </p>
              <p className="card-text" style={{ marginLeft: "30%" }}>
                <small className="text-muted">On all orders</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={support}
              alt="Card cap"
              style={{ width: "70px", marginLeft: "50%", marginTop: "10%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ marginLeft: "30%" }}>
                24/7 SUPPORT.
              </p>
              <p className="card-text" style={{ marginLeft: "30%" }}>
                <small className="text-muted">Get help when you need it</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={money}
              alt="Card cap"
              style={{ width: "70px", marginLeft: "50%", marginTop: "10%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ marginLeft: "30%" }}>
                {" "}
                100% MONEY BACK.
              </p>
              <p className="card-text" style={{ marginLeft: "30%" }}>
                <small className="text-muted">15 days back money gurrante</small>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Service;
