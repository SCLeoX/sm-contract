import { createSetContentAction, IActionSetContent } from '../actions/currentView';
import { getContent } from '../contents/Content';
import { ContentType } from '../contents/ContentType';
import * as React from '../external/react';
import { connect } from '../external/reactRedux';
import { IRootState } from '../RootState';
import { Button } from './Button';
import { Header } from './Header';

const Title = () => (
  <div className='title-container'>
    <h1>SM</h1>
    <h2>CONTRACT</h2>
  </div>
);
const PrivacyNotice = () => (
  <p
    className='privacy-notice'
    children='@{lab.sm.landing.privacyNotice}'
  />
);
interface IButtonPanelProps {
  readonly setContent: (content: ContentType) => IActionSetContent;
}
class ButtonPanelUW extends React.PureComponent<IButtonPanelProps> {
  public onClickStart = () => {
    this.props.setContent(ContentType.PROFILE);
  }
  public onClickCompare = () => {
    this.props.setContent(ContentType.COMPARE);
  }
  public onClickLanguage = () => {
    this.props.setContent(ContentType.LANGUAGE);
  }
  public onClickImport = () => {
    this.props.setContent(ContentType.IMPORT);
  }
  public onClickExport = () => {
    this.props.setContent(ContentType.EXPORT);
  }
  public onClickAbout = () => {
    this.props.setContent(ContentType.ABOUT);
  }
  public render() {
    return (
      <div className='button-panel'>
        <Button
          class='start'
          icon='edit'
          text='@{lab.sm.landing.start}'
          onClick={ this.onClickStart }
        />
        <Button
          class='compare'
          icon='compare'
          text='@{lab.sm.landing.compare}'
          onClick={ this.onClickCompare }
        />
        <Button
          class='language'
          icon='language'
          text='Language'
          onClick={ this.onClickLanguage }
        />
        <Button
          class='import'
          icon='file_download'
          text='@{lab.sm.landing.import}'
          onClick={ this.onClickImport }
        />
        <Button
          class='export'
          icon='file_upload'
          text='@{lab.sm.landing.export}'
          onClick={ this.onClickExport }
        />
        <Button
          class='about'
          icon='info'
          text='@{lab.sm.landing.about}'
          onClick={ this.onClickAbout }
        />
      </div>
    );
  }
}
const ButtonPanel = connect(null, {
  setContent: createSetContentAction,
})(ButtonPanelUW);
const Landing = () => (
  <div className='landing'>
    <Header/>
    <Title/>
    <PrivacyNotice/>
    <ButtonPanel/>
  </div>
);

interface ICoverProps {
  readonly lifted: boolean;
  readonly content: ContentType;
}

class CoverUW extends React.Component<ICoverProps> {
  public render() {
    return (
      <div>
        <div className='content-padding'/>
        { getContent(this.props.content) }
        <div className={ 'cover' + (this.props.lifted ? ' lifted' : '') }>
          <Landing/>
        </div>
      </div>
    );
  }
}

export const Cover = connect((state: IRootState) => ({
  lifted: !state.currentView.cover,
  content: state.currentView.content,
}))(CoverUW);
