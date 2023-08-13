import React from 'react';
import styles from 'styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <dl className={styles.info}>
          <div>
            <dt>생성일</dt>
            <dd>ⓒJuly 2023</dd>
          </div>
          <div>
            <dt>github link</dt>
            <dd>
              <a href="https://github.com/sonseong10/pokeLibrary" target="_blank">
                sonseong10
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}

export default Footer;
