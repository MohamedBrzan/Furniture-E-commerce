import React from "react";
import "../css/partner-carousel.css";
import partner1 from "../images/partner/1.png";
import partner2 from "../images/partner/2.png";
import partner3 from "../images/partner/3.png";
import partner4 from "../images/partner/4.png";
import partner5 from "../images/partner/5.png";
import partner6 from "../images/partner/6.png";
import partner7 from "../images/partner/7.png";

const PartnerCarousel = () => {
  const partner = [
    <img
      src={partner1}
      alt="img-15"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
    />,
    <img
      src={partner2}
      alt="img-16"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
    />,
    <img
      src={partner3}
      alt="img-17"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
    />,
    <img
      src={partner4}
      alt="img-18"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
    />,
    <img
      src={partner5}
      alt="img-19"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
    />,
    <img
      src={partner6}
      alt="img-20"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
      style={({ width: 25 }, { height: 250 })}
    />,
    <img
      src={partner7}
      alt="img-21"
      className=" rounded mb-2 w-50 h-50 thumbnail-img "
      style={({ width: 25 }, { height: 250 })}
    />,
  ];

  return (
    <section className="partner-carousel border-bottom border-top mt-5">
      <div className="container p-3">
        <div className="partner">
          <div className="container">
            <div className="row flex-nowrap align-items-center justify-content-between">
              {partner.map((img, index) => {
                return <div className="col partner-img">{img}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
