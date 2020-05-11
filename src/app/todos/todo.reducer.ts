import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState:Todo[] = [
    new Todo('Lion bebese'),
    new Todo('Lion bebese1'),
    new Todo('Lion bebese2')
];

const _todoReducer = createReducer(initialState,
  on(actions.create, (state, { text }) => [...state, new Todo( text )]),
  on(actions.toggle, (state, { id }) => {
    return state.map( todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo
      }
    })
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}