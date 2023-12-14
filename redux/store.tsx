import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import {StoreType} from '../interfaces/states';
import movies from '../server/data.json';

const initialState: StoreType = {
  movie: movies,
  selected: movies[0].id,
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
