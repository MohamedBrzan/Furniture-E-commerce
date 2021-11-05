import React from "react";
import { Link } from "react-router-dom";
import "../css/contact.css";
import hero from "../images/hero/bread-1.jpg";
import { BiChevronRight } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

import Partner from "./partner-carousel";
import { ContactUS } from "./forms";
import Rating from "@mui/material/Rating";

const Contact = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-3">
            {" "}
            <ContactUS />
          </div>
          <div className="col-lg-3 mb-3">
            <h3 className="text-uppercase">office at egypt</h3>
            <p className="text-uppercase text-secondary">
              basement company, tanta
            </p>
            <p className="text-capitalize text-secondary">
              <FiMail /> mohamedbrzan11@gmail.com
            </p>
            <p className="text-secondary">
              <BsFillTelephoneFill /> <b>(+20)</b> 111 377 2369
            </p>
          </div>
          <div className="col-lg-3">
            {" "}
            <h3 className="text-uppercase">follow us</h3>
            <p>
              <BsFacebook className="text-primary me-2 fs-4" />{" "}
              <BsYoutube className="text-danger me-2 fs-4" />{" "}
              <BsTwitter className="text-info fs-4" />
            </p>
          </div>
        </div>
        <Partner />
      </div>
    </>
  );
};

export default Contact;
