import {Reducer} from '@reduxjs/toolkit';

export interface ActionType {
  type: string;
  payload: {
    selected?: string;
  };
}

const reducer: Reducer<any, ActionType> = (state: any, action: ActionType) => {
  const {type, payload} = action;

  switch (type) {
    case 'CHANGE_MOVIE':
      return {
        ...state,
        ...(payload || {}),
      };
    default:
      return state;
  }
};

export default reducer;
