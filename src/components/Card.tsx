import * as React from '../external/react';

interface ICardProps {
  readonly children: React.ReactNode;
}
export class Card extends React.PureComponent<ICardProps> {
  public render() {
    return (
      <div className='card'>
        { this.props.children }
      </div>
    );
  }
}
}
