import { Controller, Get, Delete, Patch, Body, Post, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

@Get()
getHello(): any {
    return this.todoService.getAll();
  }

@Post('create')
create(@Body() data: { name: string }): string {
    return this.todoService.create(data);
}

@Patch('update/:id')
update(@Param('id') id:number, @Body() data: { name: string }): string {
    return this.todoService.update(id,data);
}

@Delete('delete/:id')
delete(@Param('id') id:number): string {
    return this.todoService.delete(id);
}
}