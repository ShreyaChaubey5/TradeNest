import React from "react";
 
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
    return(
       <div className="container">
        <div className="row">
            <div className="col-6 mt-5">
                <img src={imageURL} alt="xyx"></img>
            </div>
            <div className="col-2 "></div>
            <div className="col-4 " style={{lineHeight:"40px"}}>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo}>tryDemo<i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} style={{marginLeft:"50px"}}>learnMore<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div style={{marginLeft:"20px mt-3"}}>
                <a href={googlePlay}><img src="media\googlePlayBadge.svg"></img></a>
                <a href={appStore} style={{marginLeft:"30px"}}><img src="media\appstoreBadge.svg"></img></a>
                </div>
            </div>
        </div>
       </div>
    );
}

export default LeftSection;