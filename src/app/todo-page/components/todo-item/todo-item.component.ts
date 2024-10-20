import { Component, inject, input } from '@angular/core';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { removeTodo } from '../../state/todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todo = input.required<Todo>();

  private store = inject(Store);

  onDelete() {
    this.store.dispatch(removeTodo({ id: this.todo().id }));
  }
}
