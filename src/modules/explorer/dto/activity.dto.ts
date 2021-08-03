import { ApiProperty } from '@nestjs/swagger';

export class Activity {
  /**
   * payload data
   */
  @ApiProperty()
  updated: string;

  @ApiProperty()
  updates: Commit[];
}

export class CommitAuthor {
  @ApiProperty()
  username: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
}

export class CommitMediaThumbnail {
  @ApiProperty()
  width: string;
  @ApiProperty()
  height: string;
  @ApiProperty()
  url: string;
}

export class CommitLink {
  @ApiProperty()
  href: string;
}

export class Commit {
  @ApiProperty()
  id: string;
  @ApiProperty()
  link: CommitLink;
  @ApiProperty()
  title: string;
  @ApiProperty()
  updated: string;
  @ApiProperty()
  'media:thumbnail': CommitMediaThumbnail;
  @ApiProperty()
  author: CommitAuthor;
  @ApiProperty()
  summary: string;
}
