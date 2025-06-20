import React from "react";
 
function Universe(){
    return(
        <div className="container">
            <div className="row text-center mt-5 mb-5">
       <h1>The Zerodha Universe</h1>
       <p className="text-muted mb-5">Extend your trading and investment experience even further with our partner platforms</p>
       <div className="col-4 mt-4">
        <img src="media\zerodhaFundhouse.png" style={{width:"60%"}}></img>
        <p className="mt-3 text-small text-muted">Our assest management</p>
       </div>
        <div className="col-4 mt-4">
             <img src="media\smallcaseLogo.png" style={{width:"60%"}}></img>
        <p className="mt-3 text-small text-muted">Thematic investment plan</p>
        </div>
         <div className="col-4 mt-4">
             <img src="media\streakLogo.png" style={{width:"60%"}}></img>
        <p className="mt-3 text-small text-muted">Systematic trading platform</p>
         </div>
         <div className="col-4 mt-4">
        <img src="media\sensibullLogo.svg" style={{width:"60%"}}></img>
        <p className="mt-3 text-small text-muted">options trading platform</p>
       </div>
        <div className="col-4 mt-4">
             <img src="media\goldenpiLogo.png" style={{width:"60%"}}></img>
        <p className="mt-3 text-small text-muted">Bonds trading platform</p>
        </div>
         <div className="col-4 mt-4">
             <img src="media\dittoLogo.png" style={{width:"60%"}}></img>
        <p className="mt-3 text-small text-muted">Insurance</p>
         </div>
       </div>
          <button type="button" className="btn btn-primary p-2 fs-5 mb-5" style={{width:"15%",margin:"0 auto"}}>SignUp for Free</button>
       </div>
    );
}

export default Universe;