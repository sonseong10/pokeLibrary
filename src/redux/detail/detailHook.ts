import {useDispatch} from 'react-redux';
import {shallowEqual, useSelector} from 'react-redux';
import {rdxSetActive} from './detailRedux';
import type {RootState} from 'redux/store';

export const usePokemonActive = () => {
  const {name, code} = useSelector(
    (state: RootState) => ({
      name: state.pokemonDetail?.name,
      code: state.pokemonDetail?.code,
    }),
    shallowEqual
  );

  return {name, code};
};

export const useSetActiveCode = () => {
  const dispatch = useDispatch();
  return (code: number, name: string) => {
    dispatch(rdxSetActive({name, code}));
  };
};
