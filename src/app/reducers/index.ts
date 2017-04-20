import * as _action from '../actions';

export interface State {
  wordSelected: string,
  articleSelected: string
};

const initialState = {
  wordSelected: '',
  articleSelected: ''
};

export const reducer = function (state = initialState, action): State {
  switch(action.type) {

    case _action.SELECTED_WORD:
      return Object.assign({}, state, { wordSelected: action.payload });

    case _action.SELECTED_ARTICLE:
      return Object.assign({}, state, { articleSelected: action.payload });;

    default: return state;
  }
};

export const getSelectedWord = (state: State) => state.wordSelected;

export const getSelectedArticle = (state: State) => state.articleSelected;
