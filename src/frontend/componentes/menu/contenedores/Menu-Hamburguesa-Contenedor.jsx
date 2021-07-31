import React from "react";
import Menu from "../componentes/Menu";
import hambur from "../../../../assest/menu/menuhamburguesa/hamburguesapng.png";

const Hamburguesa = [
  {
    Producto: "Hamburguesa",
    Precio: 80,
    Image: hambur,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
];

export function MenuHamburguesaContenedor() {
  return <Menu data={Hamburguesa} tittle="MENU HAMBURGUESA" />;
}
