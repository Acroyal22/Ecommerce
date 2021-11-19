import { Button, Form } from "react-bootstrap";
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
        <button id="btnGroupDrop1" type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Product Filters
        </button>
        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li>   
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
        
      </div>
            <div>
                <Button
                  className="btn btn-outline-primary ml-2"
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
  );
};

export default Filters;
