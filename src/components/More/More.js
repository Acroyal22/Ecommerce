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
      {/* <div className="container d-flex justify-content-center mt-50 mb-50">
    <div className="row">
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2"> <Link To="/" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</Link> </h6> <Link To="#" className="text-muted" data-abc="true">Laptops & Notebooks</Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                    <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                    <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2"> <Link To="#" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</Link> </h6> <Link To="#" className="text-muted" data-abc="true">Laptops & Notebooks</Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                    <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                    <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2"> <Link To="#" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</Link> </h6> <Link To="#" className="text-muted" data-abc="true">Laptops & Notebooks</Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                    <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                    <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2"> <Link To="#" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</Link> </h6> <Link To="#" className="text-muted" data-abc="true">Laptops & Notebooks</Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                    <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                    <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2"> <Link To="#" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</Link> </h6> <Link To="#" className="text-muted" data-abc="true">Laptops & Notebooks</Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                    <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                    <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2"> <Link To="#" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</Link> </h6> <Link To="#" className="text-muted" data-abc="true">Laptops & Notebooks</Link>
                    </div>
                    <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                    <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                    <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</div> */}
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
