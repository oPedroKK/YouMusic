import { Link } from "react-router-dom";
import styles from "./MusicCard.module.css"

function MusicCard({id, title}) {
    return (
        <section className={styles.musiccard}>
            <Link to={`/listen/${id}`}>
                <div className={styles.coverbox}>
                    <img 
                    src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
                    alt="capa"></img>
                    
                </div>
                <h4>{title}</h4>
            </Link>
            

        </section>
    )
}

export default MusicCard;