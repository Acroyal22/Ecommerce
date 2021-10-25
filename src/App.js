
import Header from "./components/Header/Header";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/DashBoard/Home";
import Login from "./components/Login/Login";
import Register from "./components/Registers/Register";
import Email from "./components/Contact/Email";
import Logic from "./components/Payment/Logic";


function App() {
  return (
    
   
    <BrowserRouter>
       <Header />
      <div className="container-fluid">
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
       
      </div>
      
    </BrowserRouter>
   
  );
}

export default App;
