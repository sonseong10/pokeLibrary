import React from 'react';
import styles from 'styles/page.module.css';
import SideBar from 'components/layouts/SideBar';
import PoketmonList from 'components/service/poketmon/PoketmonList';

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <main className={styles.main}>
          <PoketmonList />
        </main>
        <SideBar />
      </div>
    </>
  );
}
