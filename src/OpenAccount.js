import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p>
          Modern platforms and apps, ₹0 investment, and flat ₹20 intraday and
          F&O trade
        </p>
        <Link to="/signup">
          <button
            type="button"
            className="btn btn-primary fs-5 mb-5"
            style={{ width: "30%", margin: "0 auto" }}
          >
            SignUp for Free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
