import React from "react";
import { GlobalStyles } from "../constants/styles";

export default function Footer() {
  return (
    <div className="container-fluid" >
      {" "}
      <footer className="py-3 my-4 rounded-4" style={{backgroundColor:GlobalStyles.colors.primary200}}>
        {" "}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>{" "}
        </ul>{" "}
        <p className="text-center text-body-secondary">© 2025 Cypher Inc. ~ prathamesh 75864 </p>{" "}
      </footer>{" "}
    </div>
  );
}
