import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Todo } from '../models/todo';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private platformId = inject(PLATFORM_ID);

  async getTodos(): Promise<Todo[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const tasksJson = localStorage.getItem('tasks');
      const tasks = JSON.parse(tasksJson ?? '[]');

      console.log('Loading todos');

      return tasks;
    } catch (error) {
      console.error(error);
      console.log(error);
      // throw error;
      return [];
    }
  }

  async setTodos(todos: Todo[]): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('setting todos');

    localStorage.setItem('tasks', JSON.stringify(todos));
  }
}
