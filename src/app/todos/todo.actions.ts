import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[Todo] Create Todo',
    props<{text: string}>()
);

export const toggle = createAction(
    '[Todo] Check Todo',
    props<{id: number}>()
);