import styles from "./Category.module.css"
import musicas from "../../json/music-db.json"

export const artistsGenre = [
    "Hip-Hop",
    "Indie",
    "Rock",
    "Pop"
  ]
  
export function filterArtist(id) {
    return musicas.filter( musica => musica.genre === artistsGenre[id])
  }


  

function Category({ children, name }) {


    
    return (
        <section className={styles.category}>
            <h2>Principais {name}s</h2>
                <div>
                    {children}
                </div>
        </section>
    );

}

export default Category;