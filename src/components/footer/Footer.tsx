import React from 'react'
import styles from './Footer.module.css'
import twitter from '../../svg/twitter.svg'
import facebook from '../../svg/facebook.svg'
import pinterest from '../../svg/pinterest.svg'
import rss from '../../svg//rss.svg'
import { useTranslation } from 'react-i18next';

function Footer() {
  
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_copyright}>{t("Copyright ©2024 Baraa Bzour®")}</div>
        <ul className={styles.icons}>
          <li className={styles.icon}>
            <a href="#">
              <span> <img src={twitter} alt="" width={18}/></span>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="#">
              <span > <img src={facebook} alt="" width={18}/></span>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="#">
              <span > <img src={pinterest} alt="" width={18}/></span>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="#">
              <span> <img src={rss} alt="" width={18}/></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
