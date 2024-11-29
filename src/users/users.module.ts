import { Module, Provider } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './users.repositories';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...(userProviders as Provider[]) ],
})
export class UsersModule {}
