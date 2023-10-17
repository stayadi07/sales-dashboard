import React from "react";

import "./middle.css";

const Middle = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const barHeights = [
    "14",
    "10",
    "19",
    "5",
    "20",
    "24",
    "8",
    "26",
    "25",
    "16",
    "8",
    "10",
  ];

  return (
    <div className="middle-content-container">
      <div className="bar-graph-header-container">
        <div className="bar-graph-header">
          <div className="bar-graph-left-header-box">
            <div className="overview-text">Overview</div>
            <div className="monthly-earning-text">Monthly Earning</div>
          </div>

          <div className="bar-graph-right-header-box">
            <div className="quarterly-text">Quarterly</div>
            <div class="material-symbols-outlined non-highlighted-icon">
              expand_more
            </div>
          </div>
        </div>

        <div className="bars-container">
          {barHeights &&
            barHeights?.map((bar, index) => {
              console.log("heights", index);
              return (
                <>
                  <div
                    className={`bars bar-${index}`}
                    style={{ height: `${bar}vh` }}
                  ></div>
                </>
              );
            })}
        </div>

        <div className="bar-graph-container">
          {months?.map((month, index) => (
            <div className="months-container" key={index}>
              <div className="months">{month}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="customers-container">
        <div className="customers-header">
          <div className="customers-text">Customers</div>
          <div className="customers-tagline">Customers that buy products</div>
        </div>

        <div className="donuts-graph-container">
          <div className="circle"></div>

          <div className="new-customers-container">
            <div className="percent">65%</div>
            <div className="new-customers">Total New Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
