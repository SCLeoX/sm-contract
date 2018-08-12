import { Card } from '../components/Card';
import { LinkButton } from '../components/LinkButton';
import * as React from '../external/react';

interface ILanguageOptionProps {
  readonly display: string;
  readonly name: string;
}
class LanguageOption extends React.PureComponent<ILanguageOptionProps> {
  public onClick: React.EventHandler<React.MouseEvent<any>> = event => {
    event.preventDefault();
    fetch('/api/selectLanguage', {
      body: JSON.stringify({
        language: this.props.name,
      }),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(() => {
      window.location.reload(true);
    });
  }
  public render() {
    return (
      <LinkButton onClick={ this.onClick }>
        { this.props.display }
      </LinkButton>
    );
  }
}

export class Language extends React.PureComponent {
  public render() {
    return (
      <div className='content language'>
        <Card>
          <h1>Language Selection</h1>
          <LanguageOption display='简体中文' name='zh_CN'/>
          <LanguageOption display='繁體中文（香港）—— by Sora' name='zh_HK'/>
          <LanguageOption display='English (United States)' name='en_US'/>
        </Card>
      </div>
    );
  }
}
