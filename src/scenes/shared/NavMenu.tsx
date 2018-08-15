import * as React from "react";
import { NavLink } from "react-router-dom";

export class NavMenu extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">AIRS</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink to={"/"} className="nav-link" exact={true} activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mt-2 mt-md-0">
                            <li className="nav-item">
                                <NavLink to={"/Account/Register"} className="nav-link">
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Account/Login"} className="nav-link">
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}