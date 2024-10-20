import { todoReducer } from '../todo-page/state/todo.reducer';
import { TodoState } from '../todo-page/state/todo.state';

export interface AppState {
  todoState: TodoState;
}

export const appStateMap = {
  todoState: todoReducer,
};
