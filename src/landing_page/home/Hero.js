import React from "react";
 
function Hero(){
    return(
       <div className="container p-5 mb-5">
        <div className="row text-center">
           <img src="media/homeHero.png" alt="hero" className="mb-5"></img>
           <h1 className="mt-5">Invest in Everything</h1>
           <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
           {/* <button>Sign Up for free</button> */}
           <button type="button" className="btn btn-primary fs-5 mb-5" style={{width:"30%",margin:"0 auto"}}>SignUp for Free</button>
        </div>
       </div>
    );
}

export default Hero;