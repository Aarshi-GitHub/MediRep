import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Vector from "../assets/img/landingPage/login.jpg";
import Login from "../components/landingPage/Login";
import Footer from "../components/landingPage/Footer";

export default function LandingPage(props) {
  return (
    <div className="h-screen max-h-min flex flex-col">
      <Navbar></Navbar>

      <div className="body lg:flex px-16 w-full lg:h-5/6 ">
        <div className="lg:ml-auto lg:w-1/2 w-screen">
          <Login
            setToastShow={props.setToastShow}
            settoastCondition={props.settoastCondition}
          ></Login>
        </div>
        <img
          src={Vector}
          alt="Graphics"
          className="lg:w-1/3 lg:my-auto lg:mr-auto mt-24"
        />
      </div>
      <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
