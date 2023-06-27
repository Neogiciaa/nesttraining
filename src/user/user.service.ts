import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
    ) {}

    getAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      getOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
      }
    
      async deleteById(id: number): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
