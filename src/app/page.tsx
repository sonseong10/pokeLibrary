import SideBar from "@/components/layouts/SideBar";
import styles from "@/styles/page.module.css";

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <ul>
          {arr.map((item) => (
            <li key={item}>
              <div>
                <div>
                  <img src="https://placehold.co/100x100" alt="" />
                </div>

                <dl>
                  <div>
                    <dt>code</dt>
                    <dd>N.01</dd>
                  </div>
                  <div>
                    <dt>name</dt>
                    <dd>피카츄</dd>
                  </div>
                  <div>
                    <dt>type</dt>
                    <dd>
                      <span>노말</span>
                      <span>격투</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <SideBar />
    </div>
  );
}
