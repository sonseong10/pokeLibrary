'use client';
import React from 'react';
import Image from 'next/image';
import styles from 'styles/common/sidebar.module.css';
import badgeStyles from 'styles/common/badge.module.css';
import NoSelect from 'assets/no-pokemon-selected-image.png';
import {useInitPokemonDetails, usePokemonActive, usePokemonDetails} from 'redux/detail/detailHook';
import {config} from 'utils/HTTP/axios';

const LIMITE_COUNT = 649;
/**
 * PoketmonDetail
 * @returns JSX.Element
 */
function SideBar() {
  useInitPokemonDetails();
  const {code} = usePokemonActive();
  const pokemon = usePokemonDetails();

  return (
    <aside className={styles.aside}>
      {code && pokemon ? (
        <>
          <Image
            src={
              code > LIMITE_COUNT
                ? `${config.Url.POKEMON_MOVE_URL}/${code}.png`
                : `${config.Url.POKEMON_MOVE_URL}/animated/${code}.gif`
            }
            width={320}
            height={100}
            alt={`${code}번째 포켓몬`}
            className={styles.detailImage}
          />
          <div>
            <div>
              <span>No.{code}</span>
            </div>

            <div>
              <h3>{pokemon?.names?.find(name => name.language.name === 'ko')?.name}</h3>
            </div>

            <div>
              <strong>{pokemon?.genera?.find(genus => genus.language.name === 'ko')?.genus}</strong>
              <p>{pokemon?.flavor_text_entries?.find(flavorText => flavorText.language.name === 'ko')?.flavor_text}</p>
            </div>

            <ul className={styles.typeWrapper}>
              {pokemon?.types.map(({type: {name}}, index: number) => (
                <li className={badgeStyles.badge + ' ' + badgeStyles[name]} key={index}>
                  <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                </li>
              ))}
            </ul>

            <dl>
              <div>
                <dt>키</dt>
                <dd>
                  <span>{pokemon?.height / 10}m</span>
                </dd>
              </div>
              <div>
                <dt>무게</dt>
                <dd>
                  <span>{pokemon?.weight / 10}kg</span>
                </dd>
              </div>
            </dl>

            <div>
              <strong>기술</strong>

              {pokemon?.abilities.map(({ability}, index) => (
                <span key={index}>{ability.name}</span>
              ))}
            </div>

            <div>
              <strong>통계</strong>
              <dl>
                {pokemon?.stats.map((stats, index) => (
                  <div key={index}>
                    <dt>{stats.stat.name}</dt>
                    <dd>{stats.base_stat}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </>
      ) : (
        <>
          <Image src={NoSelect} alt="" />
          <p>
            아직 선택한 포켓몬이
            <br /> 없습니다.
          </p>
        </>
      )}
    </aside>
  );
}

export default SideBar;
