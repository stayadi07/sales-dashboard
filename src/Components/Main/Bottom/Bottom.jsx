import React from "react";
import Product from "../../../Assets/product.jpg";
import "./bottom.css";

function Bottom() {
  return (
    <div className="bottom-wrapper">
      <div className="bottom-container">
        <div className="bottom-header">
          <div className="product-sell-text">Product Sell</div>

          <div className="bottom-header-right-box">
            <div className="bottom-search-container">
              <span class="material-symbols-outlined search-icon">search</span>
              <span className="search-bar-text">Search</span>
            </div>

            <div className="last-days-box">
              <div className="last-text">Last 30 days</div>
              <div class="material-symbols-outlined non-highlighted-icon">
                expand_more
              </div>
            </div>
          </div>
        </div>

        <div className="table-headers">
          <div className="product-name">Product Name</div>
          <div className="stock-price-sales-container">
            <div className="stock">Stock</div>
            <div className="price">Price</div>
            <div className="sales">Total Sales</div>
          </div>
        </div>
      </div>
      <div className="divider-line"></div>

      <div className="table-headers-values">
        <div className="product-name-container">
          <img
            src={Product}
            className="product-image"
            alt=""
            style={{ width: "50px" }}
          />
          <div className="product-container-box">
            <div className="product-name-value">Abstract 3D</div>
            <div className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="stock-price-sales-values-container">
          <div className="stock-value">32 in stock</div>
          <div className="price-value">$ 45.99</div>
          <div className="sales-value">20</div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
