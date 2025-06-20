import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-2 mb-2 ">
        <h1 className="text-center mt-2 ">People</h1>
      </div>
      <div
        className="row p-5 mt-2  p-5 text-muted fs-7"
        style={{ lineHeight: 1.8 }}
      >
        <div className="col-6 text-center ">
          <img
            src="media\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          ></img>
          <h4>Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            <br />
            Playing basketball is his zen.
          </p>
          <p>Connect on <a href=""> Homepage / TradingQnA / Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
