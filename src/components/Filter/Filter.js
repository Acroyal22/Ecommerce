import { Button, Dropdown, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "../Ratting/Ratting";

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    
   <div className="float-right">
      <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div className="btn-group" role="group">  
<Dropdown>
<Dropdown.Toggle variant="dark" id="dropdown-basic">
    Product Filter
  </Dropdown.Toggle>
    
  <Dropdown.Menu>
          <Dropdown.Item>   
            <Form.Check
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Check
              inline
              label="Descending"
              name="group1"
              type="radio"
              id={`inline-2`}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Check
              inline
              label="Include Out of Stock"
              name="group1"
              type="checkbox"
              id={`inline-3`}
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_STOCK",
                })
              }
              checked={byStock}
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Check
              inline
              label="Fast Delivery Only"
              name="group1"
              type="checkbox"
              id={`inline-4`}
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked={byFastDelivery}
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <label style={{ paddingRight: 10 }}>Rating: </label>
            <Rating
              rating={byRating}
              onClick={(i) =>
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: i + 1,
                })
              }
              style={{ cursor: "pointer" }}
            />
          </Dropdown.Item>
        
          </Dropdown.Menu>
          </Dropdown>
            <div>
                <Button
                  className="primary ml-2"
                  variant="dark"
                  onClick={() =>
                    productDispatch({
                      type: "CLEAR_FILTERS",
                    })
                  }
                >
                CLEAR
                </Button>
                </div>
                </div>
                </div>
                </div>
           

  );
};

export default Filters;
