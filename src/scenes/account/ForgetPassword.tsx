import * as React from "react";
import { RouteComponentProps } from "react-router";

export class ForgetPassword extends React.Component<RouteComponentProps<{}>, {}> {
    public render(): JSX.Element {
        return (
            <div className="container marketing">
                <div className="row margin-form">
                    <div className="col-md-4">
                        <h2>Forgot your password?</h2>
                        <h4>Enter your email.</h4>
                        <hr />
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control"
                                data-val="true"
                                data-val-email="The Email field is not a valid e-mail address."
                                data-val-required="The Email field is required." id="Email"
                                name="Email"
                                value=""
                                type="email" />
                            <span className="text-danger field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}