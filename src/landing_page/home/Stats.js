import React from "react";
import { Link } from "react-router-dom"; 

function Stats(){
    return(
       <div className="container">
         <div className="row p-3">
            <div className="col-6 p-3">
                <h1 className="mb-5">Trust with Confidence</h1>
                <h2 className="fs-4">Customer-first always</h2>
                <p className="text-muted">That's why 1.3+ crore customer trust Zerodha with 3.5+ lakh crore net worth of equity investment</p>
                <h2 className="fs-4">No spam or gimmicks</h2>
                <p className="text-muted">No,gimmicks, spam "gamification" or annoying push notification.High quality app that you use at your peace,the way you like.</p>
                <h2 className="fs-4">The Zerodha Universe</h2>
                <p className="text-muted">Not just a app,but whole ecosystem.Our investments in 30+ fintech startup offers you tailored services specific your need.</p>
                <h2 className="fs-4">Do better with money</h2>
                <p className="text-muted">With initiatives like Nudge and kill switch,we don't just facilitate transactions,but actively help you to better with your money </p>
            </div>
             <div className="col-6 p-3">
                <img src="media/ecosystem.png" style={{width:"95%"}}></img>
                <div className="text-center mb-5">
                    <Link href="" className="mx-5" style={{textDecoration:"none"}}>Explore your product<i class="fa-solid fa-arrow-right"></i></Link>
                    <Link href="" style={{textDecoration:"none"}}>try kite<i class="fa-solid fa-arrow-right"></i></Link>
                </div>
             </div>
         </div>
       </div>
    );
}

export default Stats;