import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4 mt-5" style={{marginTop:"500px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              learnMore<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-2 "></div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
