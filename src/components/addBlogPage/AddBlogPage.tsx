import React from 'react'
import styles from './AddBlogPage.module.css'
import AddCard from '../addCard/AddCard';
import Title from '../title/Title'
import { useTranslation } from 'react-i18next';

function AddBlogPage() {

  const { t } = useTranslation();
  
  return (
    <div className={styles.AddBlogPage}>
      <Title data={t("Add New Blog")} />
      <AddCard />
    </div>
  );
}

export default AddBlogPage
