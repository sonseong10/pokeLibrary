import React from 'react';
import styles from 'styles/common/input.module.css';

type IInputTextProps = {
  id?: string,
  inputType: string,
  placeholder?: string,
  className?: string,
};

function InputText({id, inputType, placeholder, className}: IInputTextProps) {
  return (
    <div className={`${styles.wrapper} ${inputType}`}>
      <input id={id} type="text" placeholder={placeholder} className={`${styles[inputType]} ${className}`} />
      <button title="검색" type="button" className={styles.searchButton} />
    </div>
  );
}

export default InputText;
