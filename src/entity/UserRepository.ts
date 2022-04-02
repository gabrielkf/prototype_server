import { AppDataSource } from '../data-source';
import { User } from './User';

const crud = AppDataSource.getRepository(User);

export class UserRepository {
  async findAll() {
    await crud.find();
  }

  async post(userInfo: User) {
    // AppDataSource.manager.post(User);
    await crud.save(userInfo);
  }
}
