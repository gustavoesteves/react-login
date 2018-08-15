import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Notifications } from "../../components/Notifications";
import { cRegister } from "../../consts/ApiFetches";
import "../../functions/Functions";

interface IRegister {
    user: IUser;
    messanges: string[];
    notifications: boolean;
}

interface IUser {
    email: string;
    password: string;
    confirmPassword: string;
}

export class Register extends React.Component<RouteComponentProps<{}>, IRegister> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.state = { user: { email: "", password: "", confirmPassword: "" }, messanges: [], notifications: false };

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }
    public emailChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            user: {
                confirmPassword: this.state.user.confirmPassword,
                email: event.currentTarget.value,
                password: this.state.user.password
            }
        });
    }
    public passwordChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            user: {
                confirmPassword: this.state.user.confirmPassword,
                email: this.state.user.email,
                password: event.currentTarget.value
            }
        });
    }
    public passwordConfirmChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            user: {
                confirmPassword: event.currentTarget.value,
                email: this.state.user.email,
                password: this.state.user.password
            }
        });
    }
    public registerClick(): void {
        fetch(cRegister, {
            body: BodyEncode<IUser>(this.state.user),
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            method: "POST"
        })
            .then(Response => Response.text().then(x => {
                const printX: JSON = JSON.parse(x);
                Object.keys(printX).forEach(key => {
                    if (key === "ModelState") {
                        Object.keys(printX[key]).forEach(newKey => {
                            Object.keys(printX[key][newKey]).forEach(otherKey => {
                                // tslint:disable-next-line:no-console
                                console.log(printX[key][newKey][otherKey]);
                            })

                        });
                    }
                });
            }));
    }
    public render(): JSX.Element {
        return (
            <div className="container marketing">
                <div className="row margin-form">
                    <div className="col-md-4">
                        <h2>Register</h2>
                        <h4>Create a new account.</h4>
                        <hr />
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control"
                                id="Email"
                                value={this.state.user.email}
                                type="email"
                                onChange={this.emailChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control"
                                id="Password"
                                value={this.state.user.password}
                                onChange={this.passwordChange}
                                type="password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input className="form-control"
                                id="ConfirmPassword"
                                value={this.state.user.confirmPassword}
                                onChange={this.passwordConfirmChange}
                                type="password" />
                        </div>
                        <button type="submit"
                            className="btn btn-default"
                            onClick={this.registerClick}>Register</button>
                        <Notifications notifications={this.state.notifications} messanges={this.state.messanges} />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}