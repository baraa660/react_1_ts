import React from 'react'
import styles from './Title.module.css'
function title({data}:{data: string}) {
  return (
    <div className={styles.title}>
      <h1>{data}</h1>
    </div>
  );
}

export default title
