import React from "react";
import "./Footer.css";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  return (
    <div className="footer" id="kontakt">
      <div className="container">
        <div className="col">
          Radom 2022 - {months[new Date().getMonth()]}&nbsp;
          {new Date().getFullYear()}.
        </div>
        <div className="col">
          <AiOutlineMail />
          &nbsp;puaro@vp.pl
        </div>
      </div>
    </div>
  );
};

export default Footer;
