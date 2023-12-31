import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container-fluid">
      <Header />

      <div className="row" style={{ height: "65vh" }}>
        <div
          className="col-6 d-flex justify-content-center align-items-center border-top-0"
          style={{ border: "2px solid #000" }}
        >
          <span className="fs-6 fw-bold text-black text-uppercase text-center w-75">
            This is some content aligned in the center verticaly and horizontally
          </span>
        </div>
        <div
          className="col-6 border-start-0 border-top-0"
          style={{ border: "2px solid #000" }}
        ></div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
