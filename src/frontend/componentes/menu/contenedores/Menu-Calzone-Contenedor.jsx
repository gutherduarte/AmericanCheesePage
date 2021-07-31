import React from "react";
import Menu from "../componentes/Menu";
import calzone from "../../../../assest/menu/menucalsone/calzone.png";

const calzones = [
  {
    Producto: "Calzone",
    Precio: 50,
    Image: calzone,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
];

export function MenuCalzoneContenedor() {
  return <Menu data={calzones} tittle="MENU CALZONES" />;
}
