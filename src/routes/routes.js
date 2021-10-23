/* eslint-disable import/no-anonymous-default-export */
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "../views/home";
import RegistrationProduct from "../views/products/registration";
import queryProducts from "../views/products/query";

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/cadastro-produtos/:sku?" component={RegistrationProduct} />
        <Route exact path="/consultar-produtos" component={queryProducts} />
      </Switch>
    </HashRouter>
  );
};
