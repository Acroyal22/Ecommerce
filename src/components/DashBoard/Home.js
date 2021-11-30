import React, { useEffect, useState } from "react";



import { CartState } from "../Context/Context";
import Filters from "../Filter/Filter";
import SingleProduct from "../SingleProduct";
import Clock from "../DashBoard/Clock/Clock";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";
import Blog from "../Blog/Blog";
import Bar from "../Bar/Bar";


const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
 



  let interval;

  const startTimer = () => {
    const countDownDate = new Date("December 30,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
       

        clearInterval(interval.current);
      } else {
     
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });

  return (
    <div style={{ 
      overflowX:"hidden"
     }}>
<Bar/>





    <div className="row">
             {/* filter section start */}
             <div className="col-md-12">
                
                <div className="float-right mr-3">
                <Filters/>
                </div>
              </div>
             {/* filter section ends */}
             
              <div className="row" style={{ marginLeft:"2px" }}>
              
                {transformProducts().map((prod) => (
                    <div className=" col-md-3 col-6" >
                        <div className="col-2"></div>
                        <SingleProduct prod={prod} key={prod.id} />
                      
                    </div>
                ))}
                
              </div>
             
    </div>
    <div className="row">
      <div className="col-1"></div>
    <div className="col-10" >
                                  <Clock
                                    timerDays={timerDays}
                                    timerHours={timerHours}
                                    timerMinutes={timerMinutes}
                                    timerSeconds={timerSeconds}
                                  />
    </div> 
    <div className="col-1"></div>
    </div>
<Service/>
<div className="row">
<div className="col-1"></div>
<div className="col-10"><Blog/></div>
<div className="col-1"></div>
</div>


<Footer/>
    </div>
  );
};

export default Home;