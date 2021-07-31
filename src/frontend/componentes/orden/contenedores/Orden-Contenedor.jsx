import React from "react";
import Orden from "../componentes/Orden";

const columnas = [
  { name: "Cantidad" },
  { name: "Orden" },
  { name: "Mesa" },
  { name: "Total" },
  { name: "Acciones" },
];

const filas = [
  {
    Cantidad: 1,
    Orden: "Pizza Hawaina, 1lt Coca Cola",
    Mesa: 5,
    Total: 250,
  },
  {
    Cantidad: 2,
    Orden: "Frappé Chocolate",
    Mesa: 2,
    Total: 140,
  },
];

export function OrdenContenedor() {
  return <Orden columnas={columnas} filas={filas} />;
}
