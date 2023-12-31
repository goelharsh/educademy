import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="row" style={{height: '10vh'}}>
      <div
        className="col-4 d-flex justify-content-center align-items-center"
        style={{ border: "2px solid #000" }}
      >
        <h6 className="text-uppercase fw-bold">Lorem Ipsum</h6>
      </div>
      <div
        className="col-8 d-flex justify-content-end align-items-center pe-5 border-start-0"
        style={{ border: "2px solid #000" }}
      >
        <Link
          to="/about"
          className="text-decoration-none text-black text-uppercase fs-6 fw-bold"
        >
          Link 1
        </Link>
      </div>
    </div>
  );
};

export default Header;
