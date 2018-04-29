import * as React from './../external/react';
import { About } from './About';
import { Compare } from './Compare';
import { ContentType } from './ContentType';
import { Export } from './Export';
import { Import } from './Import';
import { Language } from './Language';
import { Profile } from './Profile';

export function getContent(content: ContentType): React.ReactNode {
  switch (content) {
    case ContentType.PROFILE:
      return <Profile/>;
    case ContentType.COMPARE:
      return <Compare/>;
    case ContentType.LANGUAGE:
      return <Language/>;
    case ContentType.IMPORT:
      return <Import/>;
    case ContentType.EXPORT:
      return <Export/>;
    case ContentType.ABOUT:
      return <About/>;
  }
  return null;
}
