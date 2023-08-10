import React from 'react';
import InputText from '../ui/InputText';
import styles from 'styles/header.module.css';

/**
 * 글로벌 헤더 컴포넌트
 * @returns JSX.Element
 */
function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <InputText
          inputType="search"
          placeholder="당신이 찾고싶은 포케몬 이름을 입력해 주세요. 피카츄, 라이츄, 파이리, 꼬부기,"
        />
      </div>
    </header>
  );
}

export default Header;
