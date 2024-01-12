import styles from './Contact.module.css';
import kyotouImage from './kyotou.png'
import sumitomoImage from './sumitomo.png'
import lignoImage from './lignoFM.png'
import Image from 'next/image'

export default function Contact() {
    return (
        <main>
            <header className={styles.h1}>
            <h1 className={styles.hometitle}>Contact</h1>
            </header>
            <Image src={kyotouImage} alt="kyotouniv" className={styles.kyotou} />
            <Image src={sumitomoImage} alt="sumitomo" className={styles.sumitomo} />
            <Image src={lignoImage} alt="lignoFM" className={styles.lignoFM} />
            <section className={styles.contact_form}>
            <h2>お問合せ</h2>
            <form>
                <div className={styles.form_group}>
                    <label>お名前</label>
                    <input type="text" id="name" />
                </div>
                <div className={styles.form_group}>
                    <label>email</label>
                    <input type="email" id="email" />
                </div>
                <div className={styles.form_group}>
                    <label>お問合せ内容</label>
                    <textarea id="body" rows={4}></textarea>
                </div>
                <button className={styles.submit_btn} id="submit_btn">送信</button>
            </form>
            </section>
        </main >
    )
}