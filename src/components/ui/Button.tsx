'use client';
import React from 'react';
import {useSetActiveCode} from 'redux/detail/detailHook';
import styles from 'styles/common/button.module.css';

export type IButtonProps = {
  code: number;
};

function Button({code}: IButtonProps) {
  const change = useSetActiveCode();
  return (
    <button
      className={styles.button}
      onClick={() => {
        change(code);
      }}
      title="상세 정보"
    ></button>
  );
}

export default Button;
