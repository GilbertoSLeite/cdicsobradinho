import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Layout from '../src/Layout/layout';
import GA4React, { useGA4React } from "ga-4-react";

const ga4react = new GA4React("G-YVT7Y200N5");

const hist = createBrowserHistory();

const histloca = hist.location.pathname;

if (histloca === '/') {
  hist.replace('/cidadao/home');
  hist.push('/cidadao/home');
  window.location.reload();
};

if (histloca === '/cidadao/amargosa') {
  hist.replace('/cidadao/home');
  hist.push('/cidadao/home');
  window.location.reload();
};

function GA() {
const ga = useGA4React();
console.log(ga);  
return null
}

(async () =>{
ga4react.initialize();

ReactDOM.render(
  < Router history={hist} >
      <Switch>
        <Route path={histloca} component={Layout} />
      </Switch>
        <GA/>
  </Router >,
  document.getElementById("root")
);
})();
