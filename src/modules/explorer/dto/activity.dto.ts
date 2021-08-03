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

export class Commit {
  @ApiProperty()
  id: string;
  @ApiProperty()
  link: {
    href: 'https://gitlab.com/lthn.io/websites/lt.hn/-/commit/23c5932c80068b85ad2a33f5f557a29cfbed0b82';
  };
  @ApiProperty()
  title: string;
  @ApiProperty()
  updated: string;
  @ApiProperty()
  'media:thumbnail': {
    width: string;
    height: string;
    url: string;
  };
  @ApiProperty()
  author: {
    username: string;
    name: string;
    email: string;
  };
  @ApiProperty()
  summary: string;
}
