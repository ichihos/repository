'use client'
import styles from './Home.module.css'
import Image from 'next/image'
import treeImage from './ligno_tree.jpg'
import kyotouImage from './kyotou.png'
import sumitomoImage from './sumitomo.png'
import lignoImage from './lignoFM.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
  <>
    <main className={styles.main}>
    <header className={styles.h1}>
      <h1 className={styles.hometitle}>LignoSat</h1>
    </header>
    <section className={styles.content}>
      <Image src={treeImage} alt="ligno_tree" className={styles.tree} />
      <Image src={kyotouImage} alt="kyotouniv" className={styles.kyotou} />
      <Image src={sumitomoImage} alt="sumitomo" className={styles.sumitomo} />
      <Image src={lignoImage} alt="lignoFM" className={styles.lignoFM} />
      <button type="button" onClick={() => router.push("./members")} className={styles.members}>Members  </button>
      <button type="button" onClick={() => router.push("./amateur")} className={styles.amateur}>Amateur <br/>Mission</button>
      <button type="button" onClick={() => router.push("./about")} className={styles.about}>About<br/>LignoSat  </button>
      <button type="button" onClick={() => router.push("./gallery")} className={styles.gallery}>Gallery</button>
      <button type="button" onClick={() => router.push("/contact")} className={styles.contact}>Contact </button>
    </section>
  </main>
  </>
  )
}
