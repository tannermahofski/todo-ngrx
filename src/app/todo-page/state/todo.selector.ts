import { createSelector } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { TodoState } from './todo.state';

export const selectTodoState = (state: AppState) => state.todoState;

export const selectTodosFromTodoState = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
