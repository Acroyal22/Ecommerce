import React from 'react';
import f2 from "../images/f2.jpg";
import f4 from "../images/f4.jpg";
import blog1 from "../images/blog 1.jpg";
const Blog = () => {
  return (
    <div>
    
      {/* 
       
        <div
          className="card-deck"
          style={{
            marginTop: "50px",
           
            paddingLeft: "10px",
          }}
        >
          <div className="cards">
            <div className="card">
              
            </div>
           
          </div>
          <div className="cards">
            <div className="card">
             
            </div>
            
          </div>
          <div className="cards">
            <div className="card">
             
            </div>
            
            </div>
          </div>
        </div>
        <div
         className="d-grid gap-2 col-6 mx-auto"
          style={{ marginTop:"30px" }}
        >
          <button type="button" className="btn btn-primary" >View More</button>
        </div>
       */}
       <strong>
          <h1
            style={{ textAlign: "center", marginTop: "80px", fontSize: "2rem" }}
          >
            From Our Blog
          </h1>
        </strong>
        <h3
          style={{ textAlign: "center", marginTop: "40px", fontFamily: "serif" }}
        >
          Design your home interior story! Here are the latest trends, tips, and
          design tricks to help you out.
        </h3>
       <div class="card-group">
  <div class="card">
    <img
                className="card-img-top"
                src={blog1}
                alt="Card cap"
                style={{ height: "200px" }}
              /> 
    <div className="card-body text-center" >
              <small>March 12, 2020</small>
              <br />
              <strong>Best Examples of Maximalism</strong>
              <br />
              <a href=".." style={{ color: "orange" }}>
                Read More
              </a>
            </div>
  </div>
  <div class="card">
  <img
                className="card-img-top"
                src={f4}
                alt="Card cap"
                style={{ height: "200px" }}
              />
    <div className="card-body text-center">
   
              <small>March 12, 2020</small>
              <br />
              <strong>What is Shabby Chic?</strong>
              <br />
              <a href=".." style={{ color: "orange" }}>
                Read More
              </a>
           
    </div>
  </div>
  <div class="card">
  <img
                className="card-img-top"
                src={f2}
                alt="Card cap"
                style={{  height: "200px" }}
              />
    <div class="card-body text-center">
      <small>March 12, 2020</small>
              <br />
              <strong>What is Lorem Ipsum?</strong>
              <br />
              <a href=".." style={{ color: "orange" }}>
                Read More
              </a>
    </div>
  </div>
</div>
    </div>
  );
}

export default Blog;
