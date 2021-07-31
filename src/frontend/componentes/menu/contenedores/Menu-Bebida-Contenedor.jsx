import React from "react";
import Menu from "../componentes/Menu";
import cocacola from "../../../../assest/menu/menubebida/cocaCola.jpg";
import kerns from "../../../../assest/menu/menubebida/jugo.jpg";
import te from "../../../../assest/menu/menubebida/te.jfif";
import agua from "../../../../assest/menu/menubebida/agua.jfif";

const bebida = [
  {
    Producto: "Coca Cola",
    Precio: 30,
    Image: cocacola,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
  {
    Producto: "Agua",
    Precio: 20,
    Image: agua,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
  {
    Producto: "Jugo Kerns",
    Precio: 30,
    Image: kerns,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
  {
    Producto: "Té Frío",
    Precio: 30,
    Image: te,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
];

export function MenuBebidaContenedor() {
  return <Menu data={bebida} tittle="MENU BEBIDA" />;
}
