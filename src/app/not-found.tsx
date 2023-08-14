'use client';
import React, {useEffect, useState} from 'react';
import styles from 'styles/404.module.css';

function NotFound() {
  const [randomNumber, setRandomNumber] = useState<number | undefined>(undefined);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 898) + 1);
  }, []);
  return (
    <div className={styles.error}>
      <img
        src={
          randomNumber !== undefined
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${randomNumber}.gif`
            : ''
        }
        alt="랜덤 포켓몬"
      />
      <h2>잘못된 접근 또는 없는 페이지입니다.</h2>
      <span>대신 귀여운 포켓몬을 드립니다.</span>
      <a href="/">메이페이지로 이동</a>
    </div>
  );
}

export default NotFound;
