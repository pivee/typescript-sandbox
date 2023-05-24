import { Injectable, Logger } from '@nestjs/common';
import { type Users } from 'types';

@Injectable()
export class UsersService {
  create(createUserRequest: Users.CreateUserRequest) {
    Logger.log({ createUserRequest });
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserRequest: Users.UpdateUserRequest) {
    Logger.log({ updateUserRequest });
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
