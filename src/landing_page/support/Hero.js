import React from "react";
 
function Hero(){
    return(
       <section className="container-fluid mb-5" id="support">
       <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
        </div>
         <div className="row">
       <div className="col">
        <h3>Search for an answer or browse help topics to create a ticket</h3>
         <form className="mt-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Eg:how do i activate F&O, why is my order getting reject.." aria-label="Search"/>
      </form>
       <p className="mt-5 mb-5" style={{textDecoration:"Underline"}}>Track account opening  &nbsp;&nbsp;Track segment activation &nbsp;&nbsp; Intraday margins <br/>Kite user manual</p>
       </div>
       <div className="col mt-5" style={{lineHeight:"40px"}}>
        <h3>Featured</h3>
        <ol style={{textDecoration:"underline"}}>
            <li>Latest Intraday leverages and Square-off timings</li>
              <li>Rights Entitlements listing in June 2025</li>
        </ol>
       </div>
        </div>
        </section>
    );
}

export default Hero;