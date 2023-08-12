'use client';
import React from 'react';
import Image from 'next/image';
import styles from 'styles/page.module.css';
import NoSelect from 'assets/no-pokemon-selected-image.png';
import {usePokemonActive} from 'redux/detail/detailHook';

/**
 * PoketmonDetail
 * @returns JSX.Element
 */
function SideBar() {
  const {name, code} = usePokemonActive();

  return (
    <aside className={styles.aside}>
      {code ? <></> : <Image src={NoSelect} alt="" />}

      {code ? (
        <>{name}</>
      ) : (
        <p>
          아직 선택한 포켓몬이
          <br /> 없습니다.
        </p>
      )}
    </aside>
  );
}

export default SideBar;
