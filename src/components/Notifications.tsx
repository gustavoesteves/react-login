import * as React from "react";

interface IProps {
    notifications: boolean;
    messanges: string[];
}

export class Notifications extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    public notificationsMessanges(): JSX.Element {
        const result: JSX.Element[] = this.props.messanges.map(x =>
            <p key={x}>{x}</p>
        );
        return <div>{result}</div>;
    }
    public render(): JSX.Element {
        const result: JSX.Element = this.props.notifications
            ? (
                <div className="alert alert-danger" role="alert">
                    {this.notificationsMessanges}
                </div>
            ) : <div />
        return result;
    }
}