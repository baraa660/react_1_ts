import React from 'react'
import styles from './Home.module.css'
import BlogsBox from '../blogsBox/BlogsBox';
import List from '../list/List';
import Title from '../title/Title'
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
  return (
    <div className={styles.home}>
      <Title data={t("blogs")} />
      <BlogsBox />
      <List />
    </div>
  );
}

export default Home
