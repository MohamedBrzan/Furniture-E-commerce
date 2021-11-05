import React from "react";
import "../css/deal.css";
import home1 from "../images/collection/home-1.jpg";
import home2 from "../images/collection/home-2.png";
import sale from "../images/collection/sale.jpg";

const deal = () => {
  return (
    <section className="deal">
    <div className=" py-5 text-center">
      <p className=" mb-2 text-secondary text-capitalize">just only december</p>
      <h2 className="text-uppercase mb-4">deal of the month</h2>
      <div className="line mx-auto rounded  mb-2 mb-4 position-relative "></div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-6 w-50 img">
            <img className=" w-100" src={home1} alt="Home-1" />
          </div>

          <div className="col-6 w-50 img">
            <img className=" w-100  " src={home2} alt="Home-2" />
          </div>
        </div>
        <div className="col-6 w-100 mt-5  img">
          <img className=" w-100 " src={sale} alt="sale" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default deal;
