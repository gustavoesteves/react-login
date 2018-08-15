import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import "./css/site.css";
import * as RoutesModule from "./routes";
const routes: JSX.Element = RoutesModule.routes;

import registerServiceWorker from "./registerServiceWorker";

function renderApp(): void {
  // this code starts up the React app when it runs in a browser. It sets up the routing
  // configuration and injects the app into a DOM element.
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter children={routes} />
    </AppContainer>,
    document.getElementById("root")
  );
}
renderApp();

registerServiceWorker();
