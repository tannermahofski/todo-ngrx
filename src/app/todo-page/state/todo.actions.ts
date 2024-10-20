import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const createTodo = createAction(
  '[Todo Page] Create Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Service] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo Service] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo Service] Load Todos Failure',
  props<{ error: string }>()
);
