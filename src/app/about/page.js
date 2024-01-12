'use client'
import styles from './about.module.css'
import { useRouter } from 'next/navigation'
import kyotouImage from './kyotou.png'
import sumitomoImage from './sumitomo.png'
import lignoImage from './lignoFM.png'
import Image from 'next/image'


export default function Home() {
  const router = useRouter();
  return (
  <>
    <main className={styles.main}>
    <header className={styles.h1}>
      <h1 className={styles.hometitle}>About LignoSat</h1>
    </header>
    <Image src={kyotouImage} alt="kyotouniv" className={styles.kyotou} />
    <Image src={sumitomoImage} alt="sumitomo" className={styles.sumitomo} />
    <Image src={lignoImage} alt="lignoFM" className={styles.lignoFM} />
    <section className={styles.content}>
    </section>
  </main>
  </>
  )
}
