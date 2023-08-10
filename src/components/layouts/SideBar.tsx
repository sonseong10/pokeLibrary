import React from 'react';
import Image from 'next/image';
import styles from 'styles/page.module.css';
import NoSelect from 'assets/no-pokemon-selected-image.png';

/**
 * PoketmonDetail
 * @returns JSX.Element
 */
function SideBar() {
  return (
    <aside className={styles.aside}>
      <Image src={NoSelect} alt="" />
    </aside>
  );
}

export default SideBar;
