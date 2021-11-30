
import Header from "./components/Header/Header";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/DashBoard/Home";
import Login from "./components/Login/Login";
import Register from "./components/Registers/Register";
import Email from "./components/Contact/Email";
import Logic from "./components/Payment/Logic";
import More from "./components/More/More";
import About from "./components/About/About";


function App() {
  return (
    
   
    <BrowserRouter className="container-fluid">
       <Header />
      <div >
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/email">
          <Email />
        </Route>
      
        <Route path="/logic">
          <Logic />
        </Route>
        <Route path="/more">
          <More/>
        </Route>
        <Route path="/more">
          <More/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        
      </div>
      
    </BrowserRouter>
   
  );
}

export default App;
