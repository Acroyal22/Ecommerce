import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,Nav,Navbar,Container,Dropdown
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
  console.log()

const isLogin=auth.currentUser

const onChange=(e)=>{setFilter(e.target.value)}
  return (
    <header>
  <Navbar bg="dark"  variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        

        {!isLogin &&  
        <Nav.Link href="/login">Login </Nav.Link> }

     { isLogin &&  
     <Nav.Link href="/" onClick={handleOnClick} > Logout </Nav.Link> }

      {!isLogin ?
           <Nav.Link href="/register" onClick={handleOnClick} > Register </Nav.Link> 
          :"null"   }
            

      { isLogin ? 
           <Nav.Link href="/email" onClick={handleOnClick} > Contact Us </Nav.Link>  
        :"null"}

      </Nav>
      <form onSubmit={onFilter} className="d-flex col-xs-4" >
        <input
        
              type="search"
              placeholder="Search a product..."
              className="form-control me-2"
              aria-label="Search"
              value={filter}
              onChange={onChange}
            />
           
            <button onSubmit={onFilter} value={filter} className="btn btn-outline-light" type="submit"   >
           
         Search
            </ button>
            </form>
            <div className="ml-2">
            <Dropdown alignRight>
            <Dropdown.Toggle variant="light">
              <FaShoppingCart color="black" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <div className="dropdown-menu" >
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
            </div>
          </Dropdown>
          </div>
        
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
  );
};

export default Header;