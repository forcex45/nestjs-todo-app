import { Injectable } from "@nestjs/common";
import { Todo } from "./types/todo.entity";

@Injectable()
export class TodoService {
  private readonly todoList: Todo[] = [
    {
      id: 0,
      name: "Nestjs",
    },
  ];

  getAll(): any {
    return this.todoList;
  }

  create(data): string {
    const array = this.todoList.sort((a, b) => b.id - a.id)[0];
    const number = this.todoList.length > 1 ? array.id + 1 : 1;

    this.todoList.push({
      id: number,
      name: data.name,
    });
    return "true";
  }

  update(id, data): string {
    const todo = this.todoList.find((a) => a.id == id);
    if (todo) {
      todo.name = data.name;
    }
    return "true";
  }

  delete(data): string {
    const index = this.todoList.findIndex((a) => a.id == data.id);
    this.todoList.splice(index, 1);
    return "true";
  }
}
