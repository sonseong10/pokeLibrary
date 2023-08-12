import axios, {type AxiosInstance} from 'axios';
import type {IConfig} from './config';

export const config: IConfig = {
  Url: {
    POKEMON_API: process.env.NEXT_PUBLIC_POKEMON_API,
    POKEMON_STATIC_URL: process.env.NEXT_PUBLIC_POKEMON_STATIC_URL,
    POKEMON_MOVE_URL: process.env.NEXT_PUBLIC_POKEMON_MOVE_URL,
  },
};

/**
 * axios 생성
 */
export const Http: AxiosInstance = axios.create({
  baseURL: config.Url.POKEMON_API,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/hal+json',
  },
  paramsSerializer: {
    encode: encodeURIComponent,
    indexes: null,
  },
});
