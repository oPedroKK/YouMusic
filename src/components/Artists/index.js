import styles from "./Artists.module.css"
import artistsDB from "../../json/profile-db.json"
import ArtistCard from "../ArtistCard";


function Artists() {

    return (
        <section className={styles.artists}>
            <h2>Principais artistas</h2>
                <div>
                
                {

                    artistsDB.map((artista) => {
                        return <ArtistCard photo={artista.photo} format={artista.format} name={artista.name} key={artista.name}/>
                    })

                }
                
                </div>
        </section>
    );

}



export default Artists;