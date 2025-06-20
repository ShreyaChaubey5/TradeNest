import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-bottom text-center">
        <h1 className="text-center">Charges</h1>
        <h5 className="text-muted fs-5 mt-3">List of all charges and taxes</h5> 
       <div className="col-4 mt-5 P-4">
        <img src="media\pricing0.svg"></img>
        <h3>Free equity delivery</h3>
        <p className="fs-10 text-muted">All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
       </div>
       <div className="col-4 mt-5 P-4">
        <img src="media\Pricing2.svg"></img>
        <h3>Intraday and F&O trades</h3>
        <p className="fs-10 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
       </div>
       <div className="col-4 mt-5 P-4">
        <img src="media\pricingMF.svg"></img>
        <h3>Free direct MF</h3>
        <p className="fs-10 text-muted">All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
         </div>
       </div>
      </div>
   
  );
}

export default Hero;
