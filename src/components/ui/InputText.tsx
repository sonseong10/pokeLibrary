'use client';

import React from 'react';
import styles from 'styles/common/input.module.css';
import {getSearchRegExp} from 'utils/serch';

/**
 * Props for the InputText component.
 *
 * @property {string} [id] - Optional ID for the input element.
 * @property {string} inputType - Type of the input (e.g., "text", "password").
 * @property {string} [placeholder] - Optional placeholder text to display inside the input.
 * @property {string} [className] - Optional custom CSS class names to apply to the input.
 */
type IInputTextProps = {
  id?: string;
  inputType: string;
  placeholder?: string;
  className?: string;
};

/**
 * custom input Hook.
 */
const useSearch = () => {
  return (v?: string) => {
    //TODO: useRef로 연결하기
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

/**
 * custom input component 
 * @param props {@link IInputTextProps}
 * @returns React.JSX.Element
 */
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
