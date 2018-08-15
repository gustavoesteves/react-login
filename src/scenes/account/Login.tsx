import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";

export class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render(): JSX.Element {
        return (
            <div className="container marketing">
                <div className="row margin-form">
                    <div className="col-md-4">
                        <section>
                            <h2>Login</h2>
                            <h4>Use a local account to log in.</h4>
                            <hr />
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control"
                                    data-val="true"
                                    data-val-email="The Email field is not a valid e-mail address."
                                    data-val-required="The Email field is required."
                                    id="Email"
                                    name="Email"
                                    value=""
                                    type="email" />
                                <span className="text-danger field-validation-valid"
                                    data-valmsg-for="Email" data-valmsg-replace="true" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control"
                                    data-val="true"
                                    data-val-required="The Password field is required."
                                    id="Password"
                                    name="Password"
                                    type="password" />
                                <span className="text-danger field-validation-valid"
                                    data-valmsg-for="Password" data-valmsg-replace="true" />
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input data-val="true"
                                            data-val-required="The Remember me? field is required."
                                            id="RememberMe"
                                            name="RememberMe" value="true" type="checkbox" />
                                        Remember me?
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-default">Log in</button>
                                <NavLink to={"/Account/ForgetPassword"} className="nav-link">
                                    Forgot your Password?
                                </NavLink>
                                <NavLink to={"/Account/Register"} className="nav-link">
                                    Register as a new user?
                                </NavLink>
                            </div>
                            <input name="RememberMe" value="false" type="hidden" />
                        </section>
                    </div>
                    <div className="col-md-6 col-md-offset-2">
                        <section>
                            <h4>Use another service to log in.</h4>
                            <hr />
                            <div>
                                <p>
                                    There are no external authentication services configured.
                                    See <a href="https://go.microsoft.com/fwlink/?LinkID=532715">this article</a>
                                    for details on setting up this ASP.NET application to support logging
                                    in via external services.</p>
                            </div>
                        </section>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}