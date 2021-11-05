import React from "react";
import "../css/background-image.css";
import home from "../images/background/home-feature.jpg";
import { GiWorld } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import { FaPhoneAlt, FaSalesforce } from "react-icons/fa";
import { MdOutlinePayment, MdHighQuality } from "react-icons/md";

const BackgroundImage = () => {
  return (
    <section className="background-img">
      <div className="container-fluid">
        <div className="row m-0 text-start">
          <div className="background-image col-xs-12 col-md-6 p-0">
            <img src={home} alt="background" />
          </div>
          <div className=" col-xs-12 col-md-6  text p-5 ">
            <h2 className="text-capitalize  mb-3">Dream homes for everybody</h2>
            <p className="text-capitalize text-secondary  mb-5 ">
              If you’re planning a stag do in Birmingham, you’d almost have to
              include some sporting <br /> activities. After all, Sport England
              has awarded Birmingham the title National City of Sport.
            </p>
            <div className="row">
              <div className="col">
                {" "}
                <div className=" text-capitalize  text-secondary  mb-3 ">
                  <GiWorld className="text-warning fs-1 " /> deliver worldwide
                </div>
                <div className=" text-capitalize  text-secondary  mb-3 ">
                  <Ri24HoursLine className="text-warning  fs-1  " /> faster
                  shipping in 24h
                </div>
                <div className=" text-capitalize text-secondary  mb-3   ">
                  <FaPhoneAlt className="text-warning  fs-1  " /> support 24/7
                </div>
              </div>
              <div className="col">
                {" "}
                <div className=" text-capitalize  text-secondary mb-3 ">
                  <MdHighQuality className="text-warning   fs-1 " /> heighest
                  quality
                </div>
                <div className=" text-capitalize  text-secondary  mb-3 ">
                  <MdOutlinePayment className="text-warning fs-1   " /> payment
                  security
                </div>
                <div className=" text-capitalize  text-secondary  mb-3  ">
                  <FaSalesforce className="text-warning  fs-1  " /> sale off in
                  weekend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImage;
