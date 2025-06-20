import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top text-center">
        <div className="col-8 mt-5 P-4">
          <a href="">
            {" "}
            <h4>Brokerage Calculator</h4>
          </a>
          <ul className="p-4 mt-2" style={{lineHeight:"40px"}}>
            <li>Securities/Commodities transaction tax</li>
            <li>Transaction/Turnover Charges</li>
            <li>Corporate action order charges</li>
            <li>DP (Depository participant) charges</li>
            <li>AMC (Account maintenance charges)</li>
            <li>Corporate action order charges</li>
            <li>Trading using 3-in-1 account with block functionality</li>
          </ul>
        </div>
        <div className="col-4 mt-5 P-4">
          <a href="">
            {" "}
            <h4>List of Charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
