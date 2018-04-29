import * as React from '../external/react';

interface ILinkButtonProps {
  readonly children: string;
  readonly onClick: React.EventHandler<React.MouseEvent<any>>;
}
export class LinkButton extends React.PureComponent<ILinkButtonProps> {
  public render() {
    return (
      <div className='link-container'>
        <a onClick={ this.props.onClick }>
          { this.props.children }
        </a>
      </div>
    );
  }
}
