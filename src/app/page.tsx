import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Image
          src="/5minslearn.png"
          alt="5minslearn Logo"
          width={200}
          height={200}
        />
      </div>
      <h2 className={inter.className}>
        SCALEIOS DEVOPS TESTING MAHIN
      </h2>
    </main>
  )
}
