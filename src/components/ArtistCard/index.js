import styles from "./ArtistCard.module.css";

function ArtistCard({ photo, name, format}) {
    return (
        <section className={styles.ArtistCard}>
            {/* eu vou mudar essa porcaria ainda */}
        
            <img 
            src={`../images/aimg-${photo}.${format}`}
            alt="imagem-artista"/> 
            <h4>{name}</h4>

        </section>
    );
}

export default ArtistCard;