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
        <Route path="/cadastro-produtos" exact component={RegistrationProduct} />
        <Route path="/consultar-produtos" exact component={queryProducts} />
      </Switch>
    </HashRouter>
  );
};
