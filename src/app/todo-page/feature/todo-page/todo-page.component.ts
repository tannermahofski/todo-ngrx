import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectTodosFromTodoState,
  selectTodoState,
} from '../../state/todo.selector';
import { createTodo, loadTodos } from '../../state/todo.actions';
import { AsyncPipe } from '@angular/common';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [AsyncPipe, TodoItemComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent implements OnInit {
  private store = inject(Store);

  todoInput = signal('');
  allTodos$ = this.store.select(selectTodosFromTodoState);
  todoState$ = this.store.select(selectTodoState);

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  onTodoInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.todoInput.set(input);
  }

  onCreateTodo() {
    if (this.todoInput().trim() === '') {
      return;
    }

    this.store.dispatch(createTodo({ content: this.todoInput() }));
    this.todoInput.set('');
  }
}
