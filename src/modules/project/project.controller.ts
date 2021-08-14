import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';

@ApiTags('project')
@Controller({ version: '1', path: 'project' })
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  apiSpec() {}
  // /**
  //  * Search the blockhain for records
  //  * @param id block_number | tx_hash | block_hash
  //  */
  // @Get('git-stats/:id')
  // @ApiParam({
  //   name: 'id',
  //   required: false,
  //   example: 'chain',
  //   description:
  //     'project_id (https://gitlab.com/lthn.io/projects/<project_id>)',
  // })
  // searchChain(@Param('id') id: string): Promise<Observable<SearchDTO>> {
  //   return this.projectService.performSearch(id);
  // }
}
