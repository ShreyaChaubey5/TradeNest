import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row" style={{ lineHeight: "40px" }}>
        <h4 className="text-muted">
          To create a ticket, select a relevant topic
        </h4>
        <div className="col-4 mt-4">
          <p>
            <i class="fa-solid fa-circle-plus"></i> Account Opening
          </p>
          <a href="">Resident individual</a>
          <br />
          <a href="">Minor</a>
          <br />
          <a href="">Non Resident Indian (NRI)</a>
          <br />
          <a href="">Company, Partnership, HUF and LLPn</a>
          <br />
          <a href="">Glossary</a>
        </div>
        <div className="col-4 mt-4">
          <p>
            <i class="fa-regular fa-user"></i>Your Zerodha Account
          </p>
          <a href="">Your Profile</a>
          <br />
          <a href="">Account modification</a>
          <br />
          <a href="">
            Client Master Report (CMR) and Depository
            <br /> Participant (DP)
          </a>
          <br />
          <a href="">Nomination</a>
          <br />
          <a href="">Transfer and conversion of securities</a>
        </div>
        <div className="col-4 mt-4">
          <p>
            <i class="fa-solid fa-chart-simple"></i>kite
          </p>
          <a href="">IPO</a>
          <br />
          <a href="">Margin Trading Facility (MTF) and Margins</a>
          <br />
          <a href="">Charts and orders</a>
          <br />
          <a href="">Alerts and Nudges</a>
          <br />
          <a href="">General</a>
          <br />
          <a href="">Trading FAQs</a>
        </div>

        <div className="col-4 mt-4">
          <p>
            <i class="fa-solid fa-wallet"></i>Funds
          </p>
          <a href="">Add money</a>
          <br />
          <a href="">Withdraw money</a>
          <br />
          <a href="">Add bank accounts</a>
          <br />
          <a href="">eMandates</a>
          <br />
        </div>
        <div className="col-4 mt-4">
          <p>
            <i class="fa-solid fa-circle-dot"></i> Console
          </p>
          <a href="">Your Profile</a>
          <br />
          <a href="">Portfolio</a>
          <br />
          <a href="">Funds statement</a>
          <br />
          <a href="">Segments</a>
          <br />
          <a href="">Reports</a>
        </div>
        <div className="col-4 mt-4">
          <p>
            <i class="fa-solid fa-coins"></i>Coins
          </p>
          <a href="">National Pension Scheme (NPS)</a>
          <br />
          <a href="">Mutual funds</a>
          <br />
          <a href="">Features on Coin</a>
          <br />
          <a href="">Payments and Orders</a>
          <br />
          <a href="">General</a>
          <br />
          <a href="">Trading FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
