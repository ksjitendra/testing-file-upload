import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileSizeValidationPipe } from './file.validationpipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Post('upload/file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile(
    new FileSizeValidationPipe(),
  ) file: Express.Multer.File) {
    console.log(file);
}


}
