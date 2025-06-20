import React from "react";
import { Link } from "react-router-dom";

function Pricing(){
    return(
       <div className="container mb-5">
        <div className="row mt-5">
            <div className="col-4">
                <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
                <p>We pioneered the concpt of discount booking and price tranparancy in India.Flat fees no hidden charges. </p>
                  <Link href="" className="mx-5" style={{textDecoration:"none"}}>see pricing<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <div className="row text-center">
                    <div className="col-6 col border p-2">
                        <h1 className="mb-3">₹0</h1>
                        <p>Free equity delivery and direct mutual Funds</p>
                    </div>
                     <div className="col-6 col border p-2">
                        <h1 className="mb-3">₹20</h1>
                        <p>Intraday and F&O</p>
                     </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Pricing;