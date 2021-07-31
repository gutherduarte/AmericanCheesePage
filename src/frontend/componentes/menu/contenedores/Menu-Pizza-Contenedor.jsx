import React from "react";
import Menu from "../componentes/Menu";
import jamon from "../../../../assest/menu/menupizza/JamonyQueso.png";
import hongos from "../../../../assest/menu/menupizza/Hongos.png";
import hawaiana from "../../../../assest/menu/menupizza/Hawaiana.png";

const pizza = [
  {
    Producto: "Pizza Hawaiana",
    Precio: 320,
    Image: hawaiana,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
  {
    Producto: "Pizza Jamón y Queso",
    Precio: 280,
    Image: jamon,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
  {
    Producto: "Pizza Hongos",
    Precio: 300,
    Image: hongos,
    Descripcion:
      "conocida por incluir piña entre sus ingredientes principales, esta fruta es la indudable protagonista de esta delicia. Con una base de tomate, jamón y queso fundido .",
  },
];

export function MenuPizzaContenedor() {
  return <Menu data={pizza} tittle="MENU PIZZA" />;
}
