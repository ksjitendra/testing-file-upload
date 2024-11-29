import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY, FILE_REPOSITORY } from './users.repositories'

import { UserModel } from './models/user.model';
import { FileModel } from './models/files.model';


@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof UserModel,
    @Inject(FILE_REPOSITORY)
    private readonly fileRepository: typeof FileModel
  ) {}


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async saveFile(file: Express.Multer.File):Promise<void> {
     this.fileRepository.create({
      name: file.originalname,
      metaData: file.mimetype
    })
  }


}
