import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[Todo] Create Todo',
    props<{text: string}>()
);

export const toggle = createAction(
    '[Todo] Check Todo',
    props<{id: number}>()
);

export const edit = createAction(
    '[Todo] Edit Todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[Todo] Borrar Todo',
    props<{id: number}>()
);

export const toogleAll = createAction(
    '[Todo] Check All Todo',
    props<{completado: boolean}>()
);