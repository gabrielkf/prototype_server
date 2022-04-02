import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Patch()
  patchHello(): string {
    return this.appService.patchHello();
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}
