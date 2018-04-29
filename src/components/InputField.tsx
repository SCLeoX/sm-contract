import * as React from '../external/react';

interface IInputFieldProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (newValue: string) => void;
}
interface IInputFieldState {
  readonly focused: boolean;
  readonly raised: boolean;
}
export class InputField extends React.PureComponent<
  IInputFieldProps,
  IInputFieldState
> {
  public constructor(props: IInputFieldProps) {
    super(props);
    this.state = {
      focused: false,
      raised: props.value !== '',
    };
  }
  private readonly onBlur = () => {
    this.setState({
      focused: false,
      raised: this.props.value !== '',
    });
  }
  private readonly onChange: React.EventHandler<
    React.FormEvent<any>
  > = event => {
    const value: string = (event.target as HTMLInputElement).value;
    this.props.onChange(value);
  }
  private readonly onFocus = () => {
    this.setState({
      focused: true,
      raised: true,
    });
  }
  public render() {
    return (
      <div className={ 'input-field' + (this.state.focused ? ' focused' : '') }>
        <div className={ 'label' + (this.state.raised ? ' raised' : '') }>
          { this.props.label }
        </div>
        <input
          onBlur={ this.onBlur }
          onChange={ this.onChange }
          onFocus={ this.onFocus }
          type='text'
          value={ this.props.value }
        />
        <div className='underline'/>
      </div>
    );
  }
}
