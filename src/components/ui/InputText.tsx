'use client';

import React from 'react';
import styles from 'styles/common/input.module.css';
import {getSearchRegExp} from 'utils/serch';

type IInputTextProps = {
  id?: string;
  inputType: string;
  placeholder?: string;
  className?: string;
};

const useSearch = () => {
  return (v?: string) => {
    const list = document.querySelector('#pokemon-list');
    if (list) {
      setTimeout(() => {
        const nameList = list.querySelectorAll('dd#name');
        if (nameList) {
          for (let index = 0; index < nameList.length; index++) {
            const find = nameList[index].parentElement!.parentElement!.parentElement!.parentElement!;
            if (!getSearchRegExp(v!).test(nameList[index].innerHTML)) {
              find.style.display = 'none';
            } else {
              find.style.display = 'block';
            }
          }
        }
      }, 1);
    }
  };
};

function InputText({id, inputType, placeholder, className}: IInputTextProps) {
  const search = useSearch();
  return (
    <div className={`${styles.wrapper} ${inputType}`}>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={`${styles[inputType]} ${className}`}
        onChange={e => search(e.currentTarget.value)}
      />
      <button title="검색" type="button" className={styles.searchButton} />
    </div>
  );
}

export default InputText;
