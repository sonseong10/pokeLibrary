'use client';
import React from 'react';
import Image from 'next/image';
import styles from 'styles/common/sidebar.module.css';
import badgeStyles from 'styles/common/badge.module.css';
import NoSelect from 'assets/no-pokemon-selected-image.png';
import {useInitPokemonDetails, usePokemonActive, usePokemonDetails, useSetActiveCode} from 'redux/detail/detailHook';
import {config} from 'utils/HTTP/axios';
import {Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend} from 'chart.js';
import {Radar} from 'react-chartjs-2';

const LIMITE_COUNT = 649;

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
/**
 * PoketmonDetail
 * @returns JSX.Element
 */
function SideBar() {
  const loading = useInitPokemonDetails();
  const {code} = usePokemonActive();
  const pokemon = usePokemonDetails();
  const remove = useSetActiveCode();

  const data = {
    labels: ['HP', 'ATK', 'DEF', 'SpA', 'SpD', 'SPD'],
    datasets: [
      {
        label: 'count',
        data: pokemon ? pokemon.stats.map(stats => stats.base_stat) : [],
        backgroundColor: '#ff53502e',
        borderColor: '#ff5350',
        borderWidth: 1,
      },
    ],
  };

  const option = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <aside className={`${styles.aside} ${!code && styles.hide}`}>
      {code && pokemon ? (
        <>
          {loading ? (
            <div className={styles.loading}></div>
          ) : (
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
                <div className={styles.mgSm}>
                  <span className={styles.code}>No.{code}</span>
                </div>

                <div className={styles.mgSm}>
                  <h3 className={styles.name}>{pokemon?.names?.find(name => name.language.name === 'ko')?.name}</h3>
                </div>

                <div className={styles.mgMd}>
                  <strong className={styles.genus}>
                    {pokemon?.genera?.find(genus => genus.language.name === 'ko')?.genus}
                  </strong>
                  <p className={styles.comment}>
                    {pokemon?.flavor_text_entries?.find(flavorText => flavorText.language.name === 'ko')?.flavor_text}
                  </p>
                </div>

                <ul className={`${styles.typeWrapper} ${styles.mgMd}`}>
                  {pokemon?.types.map(({type: {name}}, index: number) => (
                    <li className={badgeStyles.badge + ' ' + badgeStyles[name]} key={index}>
                      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                    </li>
                  ))}
                </ul>

                <dl className={`${styles.sizeInfo} ${styles.mgMd}`}>
                  <div className={styles.size}>
                    <dt>키</dt>
                    <dd>
                      <span>{pokemon?.height / 10}m</span>
                    </dd>
                  </div>
                  <div className={styles.size}>
                    <dt>무게</dt>
                    <dd>
                      <span>{pokemon?.weight / 10}kg</span>
                    </dd>
                  </div>
                </dl>

                <div className={styles.mgMd}>
                  <strong className={styles.title}>기술</strong>

                  {pokemon?.abilities.map(({ability}, index) => (
                    <span className={styles.skill} key={index}>
                      {ability.name}
                    </span>
                  ))}
                </div>

                <div className={styles.option}>
                  <strong className={styles.title}>통계</strong>
                  <Radar data={data} options={option} />
                </div>
              </div>

              <button
                title="닫기"
                onClick={() => {
                  remove();
                }}
                className={styles.removeBtn}
              >
                X
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <Image src={NoSelect} alt="선택한 포켓몬 없음" className={styles.activeNone} />
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
