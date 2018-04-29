import { createLowerCoverAction } from '../actions/currentView';
import { getContentTitle } from '../contents/ContentType';
import * as React from '../external/react';
import { connect } from '../external/reactRedux';
import { IRootState } from '../RootState';

interface IHeaderProps {
  readonly subtitle: string;
  readonly lowerCover: typeof createLowerCoverAction;
}
class HeaderUW extends React.PureComponent<IHeaderProps> {
  public render() {
    return (
      <div className='header-container'>
        <div className='header'>
          <span className='clickable' onClick={ this.props.lowerCover }>
            SM Contract
          </span>
          <span>
            { ' · ' + this.props.subtitle }
          </span>
        </div>
      </div>
    );
  }
}
export const Header = connect((
  state: IRootState,
) => ({
  subtitle: getContentTitle(state.currentView.content),
}), {
  lowerCover: createLowerCoverAction,
})(HeaderUW);
