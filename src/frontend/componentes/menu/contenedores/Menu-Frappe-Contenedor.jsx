import React from "react";
import Menu from "../componentes/Menu";
import batido from "../../../../assest/menu/menufrappe/batidopng.png";
import frappe from "../../../../assest/menu/menufrappe/frappepng.png";

const Frappes = [
  {
    Producto: "Frappé Fresa",
    Precio: 70,
    Image: batido,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
  {
    Producto: "Frappé Chocolate",
    Precio: 80,
    Image: frappe,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
];

export function MenuFrappeContenedor() {
  return <Menu data={Frappes} tittle="MENU FRAPPE'S" />;
}
