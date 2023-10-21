import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.triangle}></div>
    <div className={styles.row1}></div>
    <div className={styles.row2}></div>
    <div className={styles.row3}></div>
  </div>
  )
}
