
import Header from "./components/Header/Header";
import "./index.css";

import { BrowserRouter, Route,Redirect } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/DashBoard/Home";
import Login from "./components/Login/Login";
import Register from "./components/Registers/Register";


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
        <Route path="/cart">
          <Cart />
        </Route>
        <Redirect from="/" to="/login"/>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
