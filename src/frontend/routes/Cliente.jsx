import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Inicio } from "./../pages/Inicio";
import { TablaContenedor } from "../componentes/reporte/contenedores/Tabla-Contenedor";
import { OrdenContenedor } from "../componentes/orden/contenedores/Orden-Contenedor";
import { MenuPizzaContenedor } from "../componentes/menu/contenedores/Menu-Pizza-Contenedor";
import { MenuBebidaContenedor } from "../componentes/menu/contenedores/Menu-Bebida-Contenedor";
import { MenuFrappeContenedor } from "../componentes/menu/contenedores/Menu-Frappe-Contenedor";
import { MenuHamburguesaContenedor } from "../componentes/menu/contenedores/Menu-Hamburguesa-Contenedor";
import { MenuCalzoneContenedor } from "../componentes/menu/contenedores/Menu-Calzone-Contenedor";

export const Cliente = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/reporte" component={TablaContenedor} />
        <Route exact path="/orden" component={OrdenContenedor} />
        <Route exact path="/menupizza" component={MenuPizzaContenedor} />
        <Route exact path="/menubebida" component={MenuBebidaContenedor} />
        <Route exact path="/menufrappe" component={MenuFrappeContenedor} />
        <Route
          exact
          path="/menuhamburguesa"
          component={MenuHamburguesaContenedor}
        />
        <Route exact path="/menucalzone" component={MenuCalzoneContenedor} />
        <Route component={Inicio} />
      </Switch>
    </Router>
  );
};
