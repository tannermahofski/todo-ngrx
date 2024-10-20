import { createReducer, on } from '@ngrx/store';
import { initialState } from './todo.state';
import {
  createTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
} from './todo.actions';

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: [...state.todos.filter((value) => value.id !== id)],
  })),
  on(loadTodos, (state) => ({
    ...state,
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
