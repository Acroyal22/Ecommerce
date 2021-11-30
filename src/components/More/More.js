import React from 'react';
import { CartState } from "../Context/Context";
import SingleProduct from '../SingleProduct';





const More = () => {
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
  return (
    <div>
<div className="row" style={{ marginLeft:"8px",marginRight:"8px" }}>
              
              {transformProducts().map((prod) => (
                  <div className=" col-md-3 col-6" >
                      <div className="col-2"></div>
                      <SingleProduct prod={prod} key={prod.id} />
                    
                  </div>
              ))}
              
            </div>
    </div>
  );
}

export default More;
