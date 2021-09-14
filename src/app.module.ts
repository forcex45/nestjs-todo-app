import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
