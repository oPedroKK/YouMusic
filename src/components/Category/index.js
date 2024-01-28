import styles from "./Category.module.css"
import musicas from "../../json/music-db.json"

export const artistsNames = [
    "Juice WRLD",
    "BoyWithUke",
    "JVKE",
    "The Kid Laroi"
  ]
  
export function filterArtist(id) {
    return musicas.filter( musica => musica.artist === artistsNames[id])
  }
  

function Category({ children, name }) {
    return (
        <section className={styles.category}>
            <h2>Principais músicas de {name}</h2>
            <div>
                {children}
            </div>
        </section>
    );

}

export default Category;