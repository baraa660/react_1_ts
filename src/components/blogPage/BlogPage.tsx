import React from 'react'
import Title from '../title/Title'
import { useTranslation } from 'react-i18next';
import Blog from '../blog/Blog';


function BlogPage() {
    const { t } = useTranslation();
  return (
    <>
      <Title data={t("Blog Details")}/>
      <Blog/>
      
      
    </>
  )
}

export default BlogPage