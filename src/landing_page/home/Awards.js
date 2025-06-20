import React from "react";
 
function Awards(){
    return(
       <div className="container mt-5 mb-5">
         <div className="row">
            <div className="col-6 p-5">
                <img src="media/largestBroker.svg" alt="largestBroker"></img>
            </div>
             <div className="col-6 p-5 mt-5">
                <h1>Largest Stock broker in India</h1>
                <p>2+ million Zerodha clients distribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                <div className="row">
                    <div className="col-6">
                        <ul>
                           <li><p>Features and options</p></li>
                           <li><p>Commodity derivatives</p></li>
                           <li><p>Currency derivatives</p></li>
                        </ul> 
                    </div>
                  <div className="col-6">
                       <ul>
                           <li><p>Stocks and IOPS</p></li>
                           <li><p>Direct Mutual Funds</p></li>
                           <li><p>Bonds and Govt. security</p></li>
                        </ul> 
                     </div>
                </div>
                <img src="media\pressLogos.png" alt="pressLogos" style={{width:"90%"}}></img>
             </div>
         </div>
       </div>
    );
}

export default Awards;