import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {PokemonDetail, PokemonDetail1, PokemonDetail2} from './detailVal';

export type IDetailState = {
  detail: PokemonDetail;
  code?: number;
};

const name = 'pokemonDetail';

const pokemonDetailSlice = createSlice({
  name,
  initialState: {} as IDetailState,
  reducers: {
    rdxSetActive(state: IDetailState, action: PayloadAction<number | undefined>) {
      state.code = action.payload;
    },
    rdxSetUpdateDetail1(state: IDetailState, action: PayloadAction<PokemonDetail1>) {
      state.detail = {...state.detail, ...action.payload};
    },
    rdxSetUpdateDetail2(state: IDetailState, action: PayloadAction<PokemonDetail2>) {
      state.detail = {...state.detail, ...action.payload};
    },
  },
});
export const {rdxSetActive, rdxSetUpdateDetail1, rdxSetUpdateDetail2} = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
