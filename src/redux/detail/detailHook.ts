import {useDispatch} from 'react-redux';
import {shallowEqual, useSelector} from 'react-redux';
import {rdxSetActive, rdxSetUpdateDetail1, rdxSetUpdateDetail2} from './detailRedux';
import type {RootState} from 'redux/store';
import {useEffect, useState} from 'react';
import {Http} from 'utils/HTTP/axios';
import type {PokemonDetail1} from './detailVal';

export const usePokemonActive = () => {
  const {code} = useSelector(
    (state: RootState) => ({
      code: state.pokemonDetail?.code,
    }),
    shallowEqual
  );

  return {code};
};

export const useSetActiveCode = () => {
  const dispatch = useDispatch();
  return (code?: number) => {
    dispatch(rdxSetActive(code));
  };
};

export const usePokemonDetails = () => {
  const {details} = useSelector(
    (state: RootState) => ({
      details: state.pokemonDetail?.detail ? state.pokemonDetail.detail : undefined,
    }),
    shallowEqual
  );

  return details;
};

export const useInitPokemonDetails = () => {
  const {code} = usePokemonActive();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const getDetail = async (code: number) => {
    setLoading(true);
    const res1 = await Http.get<PokemonDetail1>(`/pokemon/${code}`);
    if (res1) {
      dispatch(rdxSetUpdateDetail1(res1.data));
      const res2 = await Http.get(`/pokemon-species/${code}`);

      if (res2) {
        dispatch(rdxSetUpdateDetail2(res2.data));
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (code) {
      getDetail(code);
    }
  }, [code]);

  return loading;
};
