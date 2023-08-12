import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

export type IDetailState = {
  detail: any[];
  name?: string;
  code?: number;
};

const name = 'pokemonDetail';

const pokemonDetailSlice = createSlice({
  name,
  initialState: {} as IDetailState,
  reducers: {
    rdxSetActive(state: IDetailState, action: PayloadAction<{name: string; code: number}>) {
      state.name = action.payload.name;
      state.code = action.payload.code;
    },
    rdxGoogleADInit(state: IDetailState, action: PayloadAction<Array<any>>) {
      if (state.detail) {
        state.detail.concat(
          action.payload.filter(i => {
            const find = state.detail!.findIndex(item => item.code === i.code);
            if (find > -1) {
              return;
            } else {
              return i;
            }
          })
        );
      } else {
        state.detail = action.payload;
      }
      // state.detail = action.payload;
    },
    rdxGoogleManagerUpdate(state: IDetailState) {
      if (state.detail) {
        const temp = state.detail;
        state.detail = temp.map(i => {
          if (i.type === 'AD_MANAGER') {
            return {...i, state: true};
          } else {
            return i;
          }
        });
      }
    },
  },
});
export const {rdxGoogleADInit, rdxGoogleManagerUpdate, rdxSetActive} = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
