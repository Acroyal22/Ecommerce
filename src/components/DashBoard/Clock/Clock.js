import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
     <div>
     
<div  className="card-body text-center">
              
              <h3 className="card-header">NEWS AND INSPIRATION</h3>
              <strong className="hot">HOT SALES FOR NEW <br/> ARRIVALS  90% DISCOUNT</strong>
</div>

    <div className="card-group text-center">
    
  <div className="card">
   
    <div className="card-body">
    <h1>{timerDays}</h1>
              <small>Days</small>

              <small>Hours</small>
   
    </div>
  </div>
  <div className="card">
  
    <div className="card-body">
                 
    
            
            <h3>{timerHours}</h3>
            <small>Hours</small>
    
          
          <h3>{timerMinutes}</h3>
          <small>Minutes</small>
        {" "}
     
       
          <h3>{timerSeconds}</h3>
          <small>Seconds</small>
    </div>
  </div>
  <div className="card d-flex">
   
    <div className="card-body text-center">
    <h2 className="new">$10</h2>
                <small className="newPrice">New Price</small>
          
                
                <h2 className="old">$100</h2>
                <small className="oldPrice">Old Price</small>
    </div>
  </div>
</div>
   </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;