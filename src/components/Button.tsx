import * as React from '../external/react.js';

interface IButtonProps {
  readonly icon: string;
  readonly text: string;
  readonly class: string;
  readonly onClick: React.EventHandler<React.MouseEvent<any>>;
}
export class Button extends React.PureComponent<IButtonProps> {
  public render() {
    return (
      <div
        className={ 'button ' + this.props.class }
        onClick={ this.props.onClick }
      >
        <i className='material-icons'>{ this.props.icon }</i>
        <span>{ this.props.text }</span>
      </div>
    );
  }
}
