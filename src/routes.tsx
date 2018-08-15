import * as React from "react";
import { Route } from "react-router-dom";
import { ForgetPassword } from "./scenes/account/ForgetPassword";
import { Login } from "./scenes/account/Login";
import { Register } from "./scenes/account/Register";
import { Home } from "./scenes/home/Home";
import { Layout } from "./scenes/shared/Layout";

export const routes: JSX.Element = (
    <Layout>
        <Route exact={true} path="/" component={Home} />
        <Route path="/Account/Register" component={Register} />
        <Route path="/Account/Login" component={Login} />
        <Route path="/Account/ForgetPassword" component={ForgetPassword} />
    </Layout>
);
