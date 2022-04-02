import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { User } from './entity/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.appService.getUsers();
    return users;
  }

  @Post()
  addUser(user: User) {
    this.appService.addUser(user);
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
