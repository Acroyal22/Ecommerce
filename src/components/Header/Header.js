import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import { CartState } from "../Context/Context";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";




const Header = () => {

  const  [filter ,setFilter] = useState("")
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  const histroy = useHistory();

  const handleOnClick = async () => {
    await auth.signOut();
    histroy.push("/login");
  };
  
const onFilter=(e) => {
  e.preventDefault()
    productDispatch({
      type: "FILTER_BY_SEARCH",
      payload: filter,
    });
  } 
const isLogin=auth.currentUser
console.log(isLogin)
const onChange=(e)=>{setFilter(e.target.value)}
  return (
    <header>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <Link to="/" className="navbar-brand" style={{ textDecoration:"none" ,textSize:"2rem"}} >Shopping Cart</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
         
            {!isLogin && <li className="nav-item active">
              <a className="nav-link" href= "/login" >LogIn<span className="sr-only">(current)</span></a>
            </li>}
   
           { isLogin && <li className="nav-item active" onClick={handleOnClick}>
           <button   className="nav-link" >Logout<span className="sr-only">(current)</span></button>
              </li>}
     
      
            <li className="nav-item active">
              {!isLogin ?<a className="nav-link" href="/register">Register</a> :"null" }
            </li>

          { isLogin ? <li className="nav-item dropdown active">
              <Link className="nav-link dropdown-toggle" to= "/email" aria-haspopup="true" aria-expanded="false">
                Contact Us
              </Link>
        
            </li>:"null"}
        </ul>
        
      <form onSubmit={onFilter} className="d-flex col-xs-4" >
        <input
              type="search"
              placeholder="Search a product..."
              className="form-control me-2"
              aria-label="Search"
              value={filter}
              onChange={onChange}
            />
           
            <button onSubmit={onFilter} value={filter} className="btn btn-outline-success" type="submit"   >
           
         Search
            </ button>
            </form>
            <div className="ml-2">
            <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="red" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button >
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
          </div>
        
      </div>
    </div>
  </nav>
</header>

    // <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
    //   <Container>
    //     <Navbar.Brand>
    //       <Link to="/" style={{ textDecoration:"none" ,textSize:"2rem"}} >Shopping Cart</Link>
    //     </Navbar.Brand>
    //     {useLocation().pathname.split("/")[1] !== "cart" && (
    //       <Navbar.Text className="search">
    //         <FormControl
    //           style={{ width: "800px" }}
    //           type="search"
    //           placeholder="Search a product..."
    //           className="m-auto"
    //           aria-label="Search"
    //           onChange={(e) => {
    //             productDispatch({
    //               type: "FILTER_BY_SEARCH",
    //               payload: e.target.value,
    //             });
    //           }}
              
    //         />
                 
    //       </Navbar.Text>
    //     )}



    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    // <ul className="navbar-nav mr-auto">
    //   {!isLogin && <li className="nav-item active">
    //     <a className="nav-link" href= "/login" >LogIn<span className="sr-only">(current)</span></a>
    //   </li>}
   
    //  { isLogin && <li className="nav-item active" onClick={handleOnClick}>
    //  <button   className="nav-link" >Logout<span className="sr-only">(current)</span></button>
    //     </li>}
     
      
    //   <li className="nav-item active">
    //     {!isLogin ?<a className="nav-link" href="/register">Register</a>:"null"}
    //   </li>

    // { isLogin ? <li className="nav-item dropdown active">
    //     <Link className="nav-link dropdown-toggle" to= "/email" aria-haspopup="true" aria-expanded="false">
    //       Contact Us
    //     </Link>
        
    //   </li>:"null"}
      
    //   </ul>
    //   </div>
    //     <Nav>
    //       <Dropdown alignRight>
    //         <Dropdown.Toggle variant="success">
    //           <FaShoppingCart color="red" fontSize="25px" />
    //           <Badge>{cart.length}</Badge>
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu style={{ minWidth: 350,marginLeft:"-280px",marginTop:"50px"}}>
    //           {cart.length > 0 ? (
    //             <>
    //               {cart.map((prod) => (
    //                 <span className="cartitem" key={prod.id}>
    //                   <img
    //                     src={prod.image}
    //                     className="cartItemImg"
    //                     alt={prod.name}
    //                   />
    //                   <div className="cartItemDetail">
    //                     <span>{prod.name}</span>
    //                     <span>₹ {prod.price.split(".")[0]}</span>
    //                   </div>
    //                   <AiFillDelete
    //                     fontSize="20px"
    //                     style={{ cursor: "pointer" }}
    //                     onClick={() =>
    //                       dispatch({
    //                         type: "REMOVE_FROM_CART",
    //                         payload: prod,
    //                       })
    //                     }
    //                   />
    //                 </span>
    //               ))}
    //               <Link to="/cart">
    //                 <Button style={{ width: "35%",marginTop:"50px"}}>
    //                   Go To Cart
    //                 </Button>
    //               </Link>
    //             </>
    //           ) : (
    //             <span style={{ padding: 10 }}>Cart is Empty!</span>
    //           )}
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
