import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_REPOSITORY')

    private usersRepository: Repository<User>
  ) {}

  //CRIAÇÃO DE NOVOS USUÁRIOS
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }


  //EXIBIÇÃO DE TODOS OS USUÁRIOS NA TELA
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  //EXIBIÇÃO DE UM USUÁRIO NA TELA
  findOne(id: number) {
    return this.usersRepository.findOneBy({ id:id });
  }

  //ATUALIZAÇÃO DE USUÁRIO
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  //EXCLUSÃO DE UM USUÁRIO
  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
