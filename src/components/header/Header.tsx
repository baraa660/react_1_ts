import React, { ReactNode } from 'react'
import styles from './Header.module.css'
import dropdown from '../../svg/drop-down.svg'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

 
function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const options = [
    { value: 'en', label:<div><img src={"/UK_flag.png"} alt="EN" className={styles.flag_icon}/> English</div> },
    { value: 'ar', label: <div><img src={"/Saudi_flag.png"} alt="AR" className={styles.flag_icon}/> العربية</div> }
  ];

  interface DropdownOption {
    value: string;
    label: ReactNode;
  }



  const handleSelect = (option: DropdownOption) => {
  
    i18n.changeLanguage(option.value); // Language change function
    //document.body.dir = i18n.dir();//change document direction 
    navigate("/")
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_content}>
        <div className={styles.logo_and_menu}>
          <div className={styles.logo}>
            <img src="/onextrapixel.webp" alt="page icon" />
            <img src="" alt="" />
          </div>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link to="/blogs">
                  {t("blogs")}
                  <span>
                    <img src={dropdown} alt="" width={10} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/addBlog">
                  {t("Add New Blog")}
                  <span>
                    <img src={dropdown} alt="" width={10} />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          </div>
          <div className={styles.dropdown}>
            <Dropdown
              options={options}
              onChange={handleSelect}
              
              value={i18n.language}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
