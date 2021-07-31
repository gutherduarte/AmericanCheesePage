import React from "react";
import "./theme.css";

import { HeaderContenedores } from "./contenedores/Header-contenedores";
import { Footer } from "./componentes/Footer";

export const Theme = ({ children }) => {
  return (
    <>
      <HeaderContenedores />
      <div className="contenedor">{children}</div>
      <Footer />
    </>
  );
};
