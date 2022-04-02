import { Injectable } from '@nestjs/common';
import { AppDataSource } from './data-source';
import { User } from './entity/User';
// import { UserRepository as userRepository} from './entity/UserRepository';

const userRepository = AppDataSource.getRepository(User);

@Injectable()
export class AppService {
  async getUsers() {
    const users = await userRepository.find();
    return users;
  }

  // async getUser(userID: number) {
  //   const users = await userRepository.findOne(userID);
  //   return users;
  // }

  async addUser(user: User) {
    await userRepository.save(user);
  }

  patchHello(): string {
    return 'Post';
  }

  deleteHello(): string {
    return 'Post';
  }
}
