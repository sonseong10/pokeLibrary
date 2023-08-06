import SideBar from "@/components/layouts/SideBar";
import PoketmonList from "@/components/service/poketmon/PoketmonList";
import styles from "@/styles/page.module.css";

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
