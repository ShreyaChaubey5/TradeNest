import React from "react";
import { Link } from "react-router-dom";

function Education(){
    return(
       <div className="container mt-5 mb-5">
         <div className="row">
            <div className="col-6 p-5">
                <img src="media\education.svg" alt="education"></img>
            </div>
             <div className="col-6 p-5 mt-5 ">
                <h1 className="fs-2">Free and open market education</h1>
                <p className="mb-2 text-muted">Versity, the largest online stock market education book in the world covering everything from basic to advance trading </p>
              <Link href="" className="mx-5 mb-4" style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></Link>


              <p className="mt-5 text-muted">Trading Q&A, the most active trading and investment community in India for all your market related queries</p>
              <Link href="" className="mx-5" style={{textDecoration:"none"}}>Trading Q&A<i class="fa-solid fa-arrow-right"></i></Link>
                     </div>
                </div>
             </div>
        
    );
}

export default Education;