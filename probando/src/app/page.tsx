import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Card Details</h1>
      <Image
      src="/favicon.ico"
      width={500}
      height={500}
      alt="Logo"
    />
    </main>
  )
}
