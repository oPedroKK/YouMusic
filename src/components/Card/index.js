import styles from "./Card.module.css";

function Card({ photo, name, format}) {
    return (
        <section className={styles.card}>
            {/* eu vou mudar essa porcaria ainda */}
            <img 
            src={`../images/aimg-${photo}.${format}`}
            alt="imagem-artista"/> 
            <h4>{name}</h4>
        </section>
    );
}

export default Card;