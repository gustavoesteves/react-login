import * as React from "react";

interface IProps {
    Name: string;
    Value: string;
    PropsOnChange: (Name: string, Value: string) => void;
}

export class InputGeneric extends React.Component<IProps, {}> {
    public InputOnChange = () => (event: React.FormEvent<HTMLInputElement>) => {
        const name = this.props.Name;
        const value = event.currentTarget.value;
        this.props.PropsOnChange(name, value);
    }

    public render(): JSX.Element {
        return (
            <input
                type="text"
                value={this.props.Value}
                onChange={this.InputOnChange} />
        );
    }
}