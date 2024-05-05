import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <Header/>
      <div className={styles.content}>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}
