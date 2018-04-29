import * as React from '../external/react';

const mapLineToElement = (className?: string) => (line: string, i: number) => {
  if (line.startsWith('/ ')) {
    return <p className={ className } key={ i }>{ line.substr(2) }</p>;
  }
  if (line.startsWith('! ')) {
    return <h3 className={ className } key={ i }>{ line.substr(2) }</h3>;
  }
  const style: any = {};
  if (line.startsWith('>')) {
    style.textAlign = 'right';
    line = line.substr(1);
  }
  if (line.startsWith('i')) {
    style.color = '#555';
    style.fontStyle = 'italic';
    line = line.substr(1);
  }
  if (line.startsWith(' ')) {
    line = line.substr(1);
  }
  return <p className={ className } style={ style } key={ i }>{ line }</p>;
};

interface ISimpleFormatProps {
  readonly children: string;
  readonly className?: string;
}
export class SimpleFormat extends React.PureComponent<ISimpleFormatProps> {
  public render() {
    return this.props.children.split('\n').map(
      mapLineToElement(this.props.className),
    );
  }
}
