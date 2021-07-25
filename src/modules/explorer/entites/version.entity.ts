import { ApiProperty } from '@nestjs/swagger';

export class VersionEntity {
  @ApiProperty()
  api: number;
  @ApiProperty()
  blockchain_height: number;
  @ApiProperty()
  git_branch_name: string;
  @ApiProperty()
  last_git_commit_date: string;
  @ApiProperty()
  last_git_commit_hash: string;
  @ApiProperty()
  monero_version_full: string;
}
