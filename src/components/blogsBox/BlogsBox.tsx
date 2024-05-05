import React from 'react'
import styles from './BlogsBox.module.css'
import { useTranslation } from 'react-i18next';
import { useData } from '../../DataContext/DataContext';

function BlogsBox() {


  const { contentData} = useData();

  const { t } = useTranslation();

    const totalLikes = contentData.reduce((sum, content) => sum + content.liked, 0);
    const totalUnlikes = contentData.reduce((sum, content) => sum + content.unliked, 0);
    

    


    
  return (
    <div className={styles.blog_container}>
    <div className={styles.blog_box}>
      <div className={styles.count_container}>
        <span className={styles.count}>{t("Liked blogs")}: {totalLikes}</span>
      </div>
      <div className={styles.count_container}>
        <span className={styles.count}>{t("Unliked blogs")}: {totalUnlikes}</span>
      </div>
    </div>
    </div>
  )
}

export default BlogsBox
