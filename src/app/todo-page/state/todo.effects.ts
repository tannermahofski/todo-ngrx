import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  createTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
} from './todo.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { selectTodosFromTodoState } from './todo.selector';

export class TodoEffects {
  actions$ = inject(Actions);
  store = inject(Store);
  todoService = inject(TodoService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() => {
        console.log('in switch map');
        return from(this.todoService.getTodos()).pipe(
          map((todos) => {
            console.log('success');
            return loadTodosSuccess({ todos: todos });
          }),
          catchError((error) => {
            console.log('error');
            return of(loadTodosFailure({ error }));
          })
        );
      })
    )
  );

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createTodo, removeTodo),
        withLatestFrom(this.store.select(selectTodosFromTodoState)),
        switchMap(([action, todos]) => from(this.todoService.setTodos(todos)))
      ),
    { dispatch: false }
  );
}
