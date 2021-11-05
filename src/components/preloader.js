import React from "react";
import "../css/preloader.css";

const Preloader = () => {
  return (
    <section className="preloader">
      <div className="load">
        <div className="all">
          <div className="translate-middle rounded-circle "></div>
          <div className="translate-middle rounded-circle "></div>
          <div className="translate-middle rounded-circle "></div>
          <div className="translate-middle rounded-circle "></div>
          <div className="translate-middle rounded-circle "></div>
         
        </div>
      </div>
    </section>
  );
};

export default Preloader;
