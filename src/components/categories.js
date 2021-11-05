import React from "react";
import "../css/categories.css";
import { FaCouch } from "react-icons/fa";
import {
  GiCookingPot,
  GiStandingPotion,
  GiBathtub,
  GiSofa,
} from "react-icons/gi";
import { BsBookshelf } from "react-icons/bs";
import { MdOutlineEventSeat, MdOutlineBedroomParent } from "react-icons/md";
import { BiCabinet } from "react-icons/bi";
import { CgSmartHomeLight } from "react-icons/cg";

import { MdChair } from "react-icons/md";

import { SiAirtable } from "react-icons/si";

const Categories = () => {
  return (
    <section className="categories">
    <div className=" py-5 text-center">
      <div className="container">
        <p className="text-capitalize mb-2 text-secondary">
          welcome to the shop
        </p>
        <h2 className="text-uppercase mb-3">shop by category</h2>
        <div className="line mx-auto rounded mb-3 position-relative "></div>
        <div className="row">
          <div
            className="box rounded border col m-2 p-5 text-capitalize "
            role="button"
          >
            <FaCouch className="sofa" /> <div>sofa & chair</div>
          </div>
          <div
            className="box rounded border col m-2 p-5 text-capitalize"
            role="button"
          >
            <GiCookingPot className="sofa" /> <div>cooking</div>{" "}
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <BsBookshelf className="sofa" /> <div>shelf</div>
          </div>
          <div
            className="box rounded border col m-2  p-5 text-capitalize"
            role="button"
          >
            <MdOutlineEventSeat className="sofa" /> <div>seats</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <BiCabinet className="sofa" /> <div>cabinets</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <CgSmartHomeLight className="sofa" /> <div>lighting</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <MdOutlineBedroomParent className="sofa" /> <div>bedroom</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <GiStandingPotion className="sofa" /> <div>stands</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <MdChair className="sofa" /> <div>chairs</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <GiBathtub className="sofa" /> <div>bathtub</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <GiSofa className="sofa" /> <div>sofa</div>
          </div>
          <div
            className="box rounded border col  m-2 p-5 text-capitalize"
            role="button"
          >
            <SiAirtable className="sofa" /> <div>tables</div>
          </div>
        </div>{" "}
        <button className="m-auto text-capitalize btn mt-3 categories-button">
          view all categories
        </button>
      </div>
    </div>
    </section>
  );
};

export default Categories;
