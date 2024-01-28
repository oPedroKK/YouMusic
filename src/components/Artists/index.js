import styles from "./Artists.module.css"

function Artists({ children }) {
    return (
        <section className={styles.artists}>
            <h2>Principais artistas</h2>
            <div>
                {children}
            </div>
        </section>
    );

}

export default Artists;