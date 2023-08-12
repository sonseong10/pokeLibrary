import {configureStore} from '@reduxjs/toolkit';
import pokemonDetail from './detail/detailRedux';

export const store = configureStore({
  reducer: {
    pokemonDetail,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
