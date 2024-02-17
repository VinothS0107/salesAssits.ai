import React from "react";
import "./index.css";
const Cards = ({ productData }) => {
  return (
    <>
      <ul className="cards-conatiner">
        {productData.map((product) => (
          <li className="card-container" key={product.id}>
            <div className="card-image-container">
              <img
                src={product.images[0]}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div className="bookmark-flag">
              <img
                src="./assets/Bookmark.svg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div className="card-details-container">
              <p className="card-title">{product.title}</p>
              <div className="card-price-details-container">
                <p className="card-price"> &#8377; {product.price}</p>
                <div className="AddToCart">
                  <img
                    src="./assets/AddToCart.svg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cards;
