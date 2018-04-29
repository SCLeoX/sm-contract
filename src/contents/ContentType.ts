export enum ContentType {
  PROFILE,
  COMPARE,
  LANGUAGE,
  IMPORT,
  EXPORT,
  ABOUT,
}

export function getContentTitle(type: ContentType): string {
  switch (type) {
    case ContentType.PROFILE:
      return '@{lab.sm.contentTitle.profile}';
    case ContentType.COMPARE:
      return '@{lab.sm.contentTitle.compare}';
    case ContentType.LANGUAGE:
      return 'Language Selection';
    case ContentType.IMPORT:
      return '@{lab.sm.contentTitle.import}';
    case ContentType.EXPORT:
      return '@{lab.sm.contentTitle.export}';
    case ContentType.ABOUT:
      return '@{lab.sm.contentTitle.about}';
  }
}
