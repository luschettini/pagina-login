import styles from "../styles/Midia.module.css"


export default function Midia ({image}) {
    return (
        <button className={styles.midia}>{image}</button>
    )
}