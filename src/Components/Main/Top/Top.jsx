import React, { useState } from "react";
import Currency from "../../../Assets/Currency.svg";
import Sales from "../../../Assets/Sales.svg";
import Orders from "../../../Assets/Orders.svg";
import Wallet from "../../../Assets/Wallet.svg";
import "./top.css";

function Top() {
  const [data] = useState([
    {
      name: "Earning",
      value: "$918K",
      change: "⬆ 37.8% this month",
      image: Currency,
    },
    {
      name: "Orders",
      value: "$2.4K",
      change: "⬇ 2% this month",
      image: Orders,
    },
    {
      name: "Balance",
      value: "$2.4K",
      change: "⬇ 2% this month",
      image: Wallet,
    },
    {
      name: "Total Sales",
      value: "$89K",
      change: "⬆ 11% this month",
      image: Sales,
    },
  ]);
  return (
    <div className="top-content-wrapper">
      {data.map((item, index) => (
        <div className="top-content-container">
          <div className={`image-wrapper image-${index}`}>
            <img className="image-container" src={item?.image} alt="" />
          </div>
          <div className="top=content-values">
            <div className="item-name">{item.name}</div>
            <div className="item-values">{item.value}</div>
            <div className={`item-change change-${index}`}>{item.change}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Top;
