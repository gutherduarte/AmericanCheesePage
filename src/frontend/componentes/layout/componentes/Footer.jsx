import React from "react";
import "./Footer.css";
import Facebook from "../../../../assest/facebook.png";
import instagram from "../../../../assest/instagram.png";
import whatsapp from "../../../../assest/whatsapp.png";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <p className="FooterContainer-item">
          ©Copyright -American Cheese, 2021
        </p>
      </div>
      <div className="FooterContacto">
        <div className="FooterContacto__iconos">
          <img src={instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </footer>
  );
};
