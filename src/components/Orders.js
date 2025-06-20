import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/orders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <h3>Orders ({allOrders.length})</h3>
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Percent</th>
                <th>Status</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((allOrders, index) => (
                <tr key={index}>
                  <td>{allOrders.name}</td>
                  <td>{allOrders.qty}</td>
                  <td>{allOrders.price}</td>
                  <td>{allOrders.percent}</td>
                  <td className="up">
                    {allOrders.isDown ? "Falling" : "Rising"}
                  </td>
                  <td>
                    <span
                      className={`mode-cell ${
                        allOrders.mode === "BUY" ? "mode-buy" : "mode-sell"
                      }`}
                    >
                      {allOrders.mode}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
