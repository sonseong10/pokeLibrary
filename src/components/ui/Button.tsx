'use client';
import React from 'react';
import {useSetActiveCode} from 'redux/detail/detailHook';
import styles from 'styles/common/button.module.css';

export type IButtonProps = {
  code: number;
  name: string;
};

function Button({code, name}: IButtonProps) {
  const change = useSetActiveCode();
  return (
    <button
      className={styles.button}
      onClick={() => {
        change(code, name);
      }}
      title="상세 정보"
    ></button>
  );
}

export default Button;
