import styles from "./Musics.module.css"

function Musics({id, title}) {
    return (
        <section className={styles.musics}>
            <iframe src={`https://www.youtube.com/embed/${id}`} title="music-video">
            </iframe>
            <h4>{title}</h4>
        </section>
    )
}

export default Musics;