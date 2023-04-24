import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { NotesController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [NotesController],
})
export class UsersModule {}