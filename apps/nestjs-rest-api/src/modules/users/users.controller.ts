import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypedRoute, TypedBody, TypedParam } from '@nestia/core';
import { type Users } from 'types';

/**
 * @tag users
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * @tag users
   */
  @TypedRoute.Post()
  create(@TypedBody() createUserRequest: Users.CreateUserRequest) {
    return this.usersService.create(createUserRequest);
  }

  /**
   * @tag users
   */
  @TypedRoute.Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * @tag users
   */
  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /**
   * @tag users
   */
  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateUserRequest: Users.UpdateUserRequest,
  ) {
    return this.usersService.update(+id, updateUserRequest);
  }

  /**
   * @tag users
   */
  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.usersService.remove(+id);
  }
}
