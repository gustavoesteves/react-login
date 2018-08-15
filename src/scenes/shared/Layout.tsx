import * as React from "react";
import { NavMenu } from "./NavMenu";

export interface ILayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<ILayoutProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <NavMenu />
                <main className="main">
                    {this.props.children}
                    <footer className="container">
                        <p className="float-right"><a href="#">Back to top</a></p>
                        <p>© 2017-2018 Creative Code, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                    </footer>
                </main>
            </div>
        );
    }
}
