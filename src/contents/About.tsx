import { Card } from '../components/Card';
import { SimpleFormat } from '../components/SimpleFormat';
import * as React from './../external/react';

export class About extends React.PureComponent {
  public render() {
    return (
      <div className='content about'>
        <Card>
          <h1>{ '@{lab.sm.about.openSource.title}' }</h1>
          <p>
            { '@{lab.sm.about.openSource.link}: ' }
            <a
              target='_blank'
              href='https://github.com/SCLeoX/sm-contract'
              children='https://github.com/SCLeoX/sm-contract'
            />
          </p>
          <SimpleFormat>{ '@{lab.sm.about.openSource.desc}' }</SimpleFormat>
        </Card>
        <Card>
          <h1>{ '@{lab.sm.about.faq.title}' }</h1>
          <SimpleFormat>{ '@{lab.sm.about.faq.content}' }</SimpleFormat>
        </Card>
      </div>
    );
  }
}
