import { useState, useEffect } from "react";
import "./index.css";
import Cards from "./Cards";

function ProductList() {
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => setproductData(data.products))
      .catch((err) => console.error("error:", err));
  });
  return (
    <main className="product-list-container">
      <div className="product-categories-tag-container">
        <div className="product-categories-tag-title">
          <span className="">Bags</span>
          <span className="">&bull;</span>
          <span className="">Backpacks</span>
        </div>
        <div className="product-categories-tag-info">
          <p>{productData.length} product{(productData.length > 1)?'s':''}</p>
          <div className="product-categories-tag-info-icon">
            <img
              src="./assets/ProductInfo.svg"
              alt="info"
              width="16"
              height="20"
            />
          </div>
        </div>
      </div>
      <div className="produts-section">
        <Cards productData ={productData} />
      </div>
    </main>
  );
}
export default ProductList;
