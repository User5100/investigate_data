import { Action } from '@ngrx/store';

export const SELECTED_WORD = 'SELECT_WORD';
export const SELECTED_ARTICLE = 'SELECT_ARTICLE';

export class SelectWordAction implements Action {
  readonly type = SELECTED_WORD;

  constructor(public payload: string) { }
}

export class SelectArticleAction implements Action {
  readonly type = SELECTED_ARTICLE;

  constructor(public payload: string) { }
}

export type Actions = SelectWordAction | SelectArticleAction;
