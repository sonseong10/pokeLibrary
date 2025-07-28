import React from 'react';
import InputText from '../ui/InputText';
import styles from 'styles/header.module.css';

/**
 * Global Header component.
 * @returns JSX.Element
 */
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <InputText inputType="search" placeholder="포켓몬 이름을 입력해 주세요.." />
      </div>
    </header>
  );
}

export default Header;
