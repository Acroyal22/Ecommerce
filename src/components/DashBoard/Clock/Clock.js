import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    // <Fragment>
      <section  className="card text-center">
        
         
          <div  className="card-body">
              
                  <h3 className="card-header">NEWS AND INSPIRATION</h3>
                  <strong className="hot">HOT SALES FOR NEW <br/> ARRIVALS  90% DISCOUNT</strong>

           <div>
              <p>{timerDays}</p>
              <small>Days</small>
           
            <span>:</span>
            
              <p>{timerHours}</p>
              <small>Hours</small>
            {" "}
            <span>:</span>
          
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            {" "}
            <span>:</span>
           
              <p>{timerSeconds}</p>
              <small>Seconds</small>
           
            <br/>
           
                
                <h2 className="new">$10</h2>
                <small className="newPrice">New Price</small>
          
                
                <h2 className="old">$100</h2>
                <small className="oldPrice">Old Price</small>
                </div>
          </div>
        
        </section>
    
    // </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;