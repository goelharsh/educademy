import React from "react";

const Footer = () => {
  return (
    <div className="row" style={{ height: "25vh" }}>
      <div
        className="col-12 d-flex align-items-center border-top-0"
        style={{ border: "2px solid #000" }}
      >
        <span
          className="fs-6 fw-bold text-black text-uppercase text-center ms-5"
          style={{ width: "28%" }}
        >
          This is the footer content which is aligned left
        </span>
      </div>
    </div>
  );
};

export default Footer;
