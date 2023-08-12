import React from 'react';
import styles from 'styles/page.module.css';
import PoketmonList from 'components/service/poketmon/PoketmonList';
import dynamic from 'next/dynamic';
import type {Metadata} from 'next';

const SideBar = dynamic(() => import('components/layouts/SideBar'), {ssr: false});

export const metadata: Metadata = {
  title: '포켓몬 사전',
  description: '당신이 찾고있는 포켓몬에 대한 정보',
};

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
